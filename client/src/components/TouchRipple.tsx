import { VNode } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { TouchRippleElement } from "web-touch-ripple";

/*
declare module 'preact/src/jsx' {
    namespace JSXInternal {
        // 전역적으로 사용은 가능하나 JSX 내에서 선언되지 않은 웹 컴포넌츠 요소를 선언합니다.
        interface IntrinsicElements {
            'touch-ripple': TouchRippleAttributes;
        }
    }
}

interface TouchRippleAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
    ontap?: Function;
}
*/

export function TouchRipple({onTap, children}: {
    onTap: Function,
    children: VNode,
}) {
    const ref = useRef<TouchRippleElement>();
    console.log(onTap);

    useLayoutEffect(() => {
        ref.current.ontap = onTap;
    }, []);

    return (
        /** @ts-ignore */
        <touch-ripple ref={ref}>{children}</touch-ripple>
    );
}