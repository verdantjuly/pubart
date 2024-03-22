import { VNode } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { TouchRippleElement } from "web-touch-ripple";

export function TouchRipple({onTap, wait, children}: {
    onTap?: Function,
    wait?: boolean,
    children: VNode,
}) {
    const ref = useRef<TouchRippleElement>();

    useLayoutEffect(() => {
        const ripple = ref.current;
        ripple.ontap = onTap;
        
        wait ? ripple.setAttribute("wait", "") : ripple.removeAttribute("wait");
    }, [onTap, wait]);

    return (
        /** @ts-ignore */
        <touch-ripple ref={ref}>{children}</touch-ripple>
    );
}