import Router from 'preact-router';
import { HomePage } from './pages/Home';
import { NotFound } from './pages/NotFound';

export default function App() {
    return (
        <Router>
            <HomePage path="/" />
            
            {/* @ts-ignore - default 속성은 예약어이므로 부득이하게 속성을 선언하지 못했습니다. */}
            <NotFound default />
        </Router>
    )
}