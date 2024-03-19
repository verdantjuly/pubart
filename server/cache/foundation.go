package cache

import "sync"

type Cacheable[T any] struct {
	Key  string // 주로 압축 유형이 정의됩니다.
	Path string // 주로 파일 경로가 정의됩니다.
}

var (
	cachedMutex = sync.RWMutex{}
	cachedMap   = map[string]map[string]any{}
)

func (r *Cacheable[T]) Load() (*T, bool) {
	cachedMutex.RLock()
	defer cachedMutex.RUnlock()

	if byKey, ok := cachedMap[r.Key]; !ok {
		return nil, false
	} else {
		data, ok := byKey[r.Path]
		if !ok {
			return nil, false
		}
		return data.(*T), true
	}
}

func (r *Cacheable[T]) Cache(data *T) {
	cachedMutex.Lock()
	defer cachedMutex.Unlock()

	if _, ok := cachedMap[r.Key]; !ok {
		cachedMap[r.Key] = make(map[string]any)
	}

	cachedMap[r.Key][r.Path] = data
}
