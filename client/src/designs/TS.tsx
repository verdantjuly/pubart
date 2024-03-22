import { VNode } from "preact";
import { JSXInternal } from "preact/src/jsx"

/** Template Style */
export namespace TS {
    export function FlexRow({className, style = {}, children}: {
        className?: string,
        style?: JSXInternal.CSSProperties,
        children: VNode | VNode[],
    }) {
        style.display = "flex";
        style.flexDirection = "row";

        return (
            <div className={className} style={style}>{children}</div>
        )
    }

    export function FlexColumn({className, style = {}, children}: {
        className?: string,
        style?: JSXInternal.CSSProperties,
        children: VNode | VNode[],
    }) {
        style.display = "flex";
        style.flexDirection = "column";

        return (
            <div className={className} style={style}>{children}</div>
        )
    }
}