import { TS } from "../designs/TS"
import { Pubart } from "../designs/Pubart"

export function HomePage({path}: {
    path: string
}) {
    return (
        <TS.FlexColumn style={{height: "100%"}}>
            <Pubart.Header />
            <Pubart.Sidebar.Body />
        </TS.FlexColumn>
    )
}