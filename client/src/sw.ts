
addEventListener("fetch", event => {
    const { method, url } = event.request;
    const ext = new URL(url).pathname.split(".")[1];

    // 요청 경로에서 파일 확장자가 존재하지 않는 경우 기존에 캐싱되었던 정적 리소스로 응답합니다.
    if (ext == null && method == "GET") {
        event.respondWith((async () => {
            let cache = await caches.open("res");
            let cachedResponse = await cache.match("/"); // 최상위 경로

            if (!cachedResponse) {
                cache.put("/", (cachedResponse = await fetch(event.request)).clone());
            }

            return cachedResponse;
        })());
    }
});