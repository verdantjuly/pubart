package main

import (
	"log"
	"net/http"
	"pubart/api"
	baseapi "pubart/api/base"
	"runtime"
	// "github.com/quic-go/quic-go/http3"
)

func main() {
	// 프로세스의 모든 CPU 코어를 활용하다록 설정합니다.
	runtime.GOMAXPROCS(runtime.NumCPU())

	handler := api.HostRouteHandler{}
	handler.RegisterHost("127.0.0.1:8080", baseapi.HTTPHandler{})

	if err := http.ListenAndServe(
		":8080",
		// "ssl/certificate.crt",
		// "ssl/private.key",
		&handler,
	); err != nil {
		log.Fatalln("HTTP 관련 수신 소켓을 초기화하는 과정에서 예외가 발생하였습니다.", err.Error())
	}
}
