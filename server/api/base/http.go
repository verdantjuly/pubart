package baseapi

import (
	"net/http"
	"path/filepath"
	"pubart/api/health"
	"pubart/cache"
	"pubart/json"
	"pubart/util"
)

type HTTPHandler struct {
	http.Handler
}

func (h HTTPHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// 사용자가 요청한 경로가 api로 시작하는 경우 BackHandler로 연결합니다.
	if util.IsApi(r.URL.Path) {
		h.BackHandler(w, r)
	} else {
		h.FrontHandler(w, r)
	}
}
func (HTTPHandler) BackHandler(w http.ResponseWriter, r *http.Request) {
	var data interface{}
	if r.URL.Path == "/api/health" {
		data = health.Health()
	}
	json.WriteWith(data, w)
}

func (HTTPHandler) FrontHandler(w http.ResponseWriter, r *http.Request) {
	ext := filepath.Ext(r.URL.Path)
	res := cache.Resource{}

	// 사용자가 요청한 경로에서 확장자가 존재하지 않는다면 페이지 동작을 수행합니다.
	if ext == "" {
		res.Path = util.JoinPath("../client", "dist/index.html")

		// #1 클라이언트가 응답된 HTML 문서를 파싱 한 이후, 정적 리소스를 한번 캐싱 하기 위해서 다시 서버에게 이를 요청합니다.
		// 하지만 정적 리소스를 다시 물리적으로 서버에게 요청하는 것은 매우 비효율적이므로 이를 해결하기 위해
		// 클라이언트에게 정적 리소스를 캐싱하여 물리적으로 서버에 다시 요청하지 않도록 합니다.
		//
		w.Header().Set("Cache-Control", "max-age=60")
	} else {
		res.Path = util.JoinPath("../client", filepath.Join("dist", r.URL.Path))
	}

	// 폰트를 요청한 경우, 해당 리소스가 1년 정도 클라이언트에서 캐싱되도록 합니다.
	if ext == ".ttf" || ext == ".otf" || ext == ".woff" || ext == ".woff2" {
		res.IgnoreCompress = true
		w.Header().Set("Cache-Control", "max-age=31536000, public")
	}
	res.WriteWith(w, r)
}
