import { useState } from 'preact/hooks';

export function UserPage({path}: {
    path: string
}) {
    const [ count, setCount ] = useState(1);

    return (
        <button onClick={() => setCount(count + 1)}>User {count}</button>
    )
}