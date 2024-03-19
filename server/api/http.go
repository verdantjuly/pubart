package api

import "net/http"

type HostRouteHandler struct {
	http.Handler

	Hosts map[string]http.Handler
}

// 서브 도메인과 전용 핸들러를 등록합니다.
func (h *HostRouteHandler) RegisterHost(name string, handler http.Handler) {
	if h.Hosts == nil {
		h.Hosts = make(map[string]http.Handler)
	}

	h.Hosts[name] = handler
}

func (h *HostRouteHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// 주어진 요청에서 등록된 호스트가 존재한다면 해당 전용 핸들러로 위임합니다.
	if host, ok := h.Hosts[r.Host]; ok {
		host.ServeHTTP(w, r)
		return
	}

	w.WriteHeader(404)
}
