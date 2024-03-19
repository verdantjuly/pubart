package util

import "path/filepath"

// 주어진 두 경로에서 상위 참조를 제거하고 병합한 뒤 이를 반환합니다.
func JoinPath(p1, p2 string) string {
	cp1 := filepath.Clean(p1)
	cp2 := filepath.Clean(p2)
	return filepath.Join(cp1, cp2)
}
