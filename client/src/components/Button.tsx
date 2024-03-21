import { useState } from "preact/hooks"
import { TouchRipple } from "./TouchRipple"

export namespace Button {
    export function Primary({text}: {
        text: string
    }) {
        return (
            <TouchRipple onTap={() => console.log("hello world")}>
                <button class="primary">{text}</button>
            </TouchRipple>
        )
    }
}