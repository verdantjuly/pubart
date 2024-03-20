package util

import (
	"bytes"
	"compress/flate"
	"compress/gzip"
	"net/http"
	"strings"

	"github.com/andybalholm/brotli"
	// "github.com/valyala/gozstd"
)

// 주어진 HTTP 요청에 적합한 압축 유형으로 주어진 데이터를 압축합니다.
func Compress(r *http.Request, content *[]byte) string {
	compressType := CompressType(r)

	switch compressType {
	case "gzip":
		CompressGzip(content)
	case "br":
		CompressBrotli(content)
	case "deflate":
		CompressDeflate(content)
	}

	return compressType
}

// 주어진 HTTP 요청에서 가장 우선순위가 높은 압축 유형 선택하여 이를 반환합니다.
//
// 지원되는 압축 유형은 다음과 같습니다:
// 1. gzip
// 2. deflate
// 3. brotli
func CompressType(r *http.Request) string {
	acceptEncoding := r.Header.Get("Accept-Encoding")

	if strings.Contains(acceptEncoding, "br") {
		return "br"
	}
	if strings.Contains(acceptEncoding, "zstd") {
		return "zstd"
	}
	if strings.Contains(acceptEncoding, "deflate") {
		return "deflate"
	}

	// gzip 압축 유형은 대부분의 웹 통신에서 사용되므로 이를 지원하지 않는다면
	// 부정적인 방법으로 요청된 것일 수 있습니다.
	return "gzip"
}

func CompressBrotli(content *[]byte) {
	buffer := bytes.Buffer{}
	writer := brotli.NewWriterOptions(&buffer, brotli.WriterOptions{
		Quality: 11,
		LGWin:   24,
	})
	writer.Write(*content)
	writer.Close()

	*content = buffer.Bytes()
}

func CompressDeflate(content *[]byte) {
	buffer := bytes.Buffer{}
	writer, _ := flate.NewWriter(&buffer, flate.BestCompression)
	writer.Write(*content)
	writer.Close()

	*content = buffer.Bytes()
}

func CompressGzip(content *[]byte) {
	buffer := bytes.Buffer{}
	writer, _ := gzip.NewWriterLevel(&buffer, gzip.BestCompression)
	writer.Write(*content)
	writer.Close()

	*content = buffer.Bytes()
}

/*
func CompressZstd(content *[]byte) {
	buffer := bytes.Buffer{}
	writer := gozstd.NewWriterLevel(&buffer, 19)
	writer.Write(*content)
	writer.Close()

	*content = buffer.Bytes()
}
*/
