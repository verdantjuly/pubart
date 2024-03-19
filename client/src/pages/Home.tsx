import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

export function HomePage({path}: {
    path: string
}) {
    const [ count, setCount ] = useState(1);

    return (
        <>
            <Button.Primary text="로그인" />
            <button onClick={() => setCount(count + 1)}>Home {count}</button>
            <button onClick={() => route("/user")}>go UserPage</button>
            <Icon name="logo" size={50} />
        </>
    )
}