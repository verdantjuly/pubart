package util

import (
	"errors"
	"log"
	"mime"
	"os"
	"path/filepath"
	"strings"
)

// 주어진 파일 경로에서 확장자에 해당하는 Mime 타입을 반환합니다.
// 이는 주로 HTTP의 Content-Type 헤더 값을 정의하는데 사용됩니다.
func ContentType(path string) string {
	return mime.TypeByExtension(filepath.Ext(path))
}

func ContentAndType(path string) ([]byte, string) {
	content, err := os.ReadFile(path)
	if err != nil && !errors.Is(err, os.ErrNotExist) {
		log.Println("주어진 경로에 해당하는 파일의 내용을 불러오는 과정에서 예외가 발생하였습니다.", err.Error())
	}

	return content, ContentType(path)
}

func IsApi(path string) bool {
	paths := strings.Split(path, "/")
	if paths[1] == "api" {
		return true
	} else {
		return false
	}
}
