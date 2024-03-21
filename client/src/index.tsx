import { render } from 'preact';

import App from './App';

import './styles/variable';
import './styles/template.css';
import './styles/main';
import './styles/font';

import 'web-touch-ripple';

const isDebug = Boolean(process.env.IS_DEBUG);

// 클라이언트가 서비스 워커를 지원하는 경우, 정적 리소스를 캐싱하기 위해 서비스 워커를 등록해야 합니다.
if ("serviceWorker" in navigator && !isDebug) {
    navigator.serviceWorker.register("/sw.js");

    // 자세한 내용은 최상위 경로로 시작하여 server/api/base/http.go의 ServceHTTP()
    // 함수 내의 #1 주석을 참고하세요.
    const cache = await caches.open("res");
    const cachedResponse = await cache.match("/");

    if (!cachedResponse) {
        cache.put("/", await fetch("/")); // 캐싱된 리소스 요청.
    }
}

render(<App />, document.body);