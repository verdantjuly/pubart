package cache

import (
	"net/http"
	"pubart/config"
	"pubart/util"
)

// 정적 리소스를 캐싱하기 위해 선언되었습니다.
type Resource struct {
	Cacheable[ResourceData]

	// 리소스에 대한 압축 과정을 생략해야 하는지에 대한 여부.
	IgnoreCompress bool
}

type ResourceData struct {
	Content     []byte
	ContentType string
}

func (r *Resource) shouldCompress() bool {
	return !r.IgnoreCompress
}

func (r *Resource) WriteWith(w http.ResponseWriter, hr *http.Request) {
	// 정적 리소스의 캐시에 대한 키의 경우, 압축 유형을 나타냅니다.
	if r.Key == "" && r.shouldCompress() {
		r.Key = util.CompressType(hr)
		w.Header().Set("Content-Encoding", r.Key)
	}

	if data, ok := r.Load(); ok && !config.IsDebugMode {
		w.Header().Set("Content-Type", data.ContentType)
		w.Write(data.Content)
	} else {
		content, contentType := util.ContentAndType(r.Path)

		// 주어진 경로에 파일이 존재하지 않는 경우 404 상태 코드를 응답합니다.
		if content == nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}

		// 모든 정적 리소스는 네트워크 성능을 개선하기 위해서 압축됩니다.
		if r.shouldCompress() {
			util.Compress(hr, &content)
		}

		r.Cache(&ResourceData{
			Content:     content,
			ContentType: contentType,
		})
		w.Header().Set("Content-Type", contentType)
		w.Write(content)
	}
}
