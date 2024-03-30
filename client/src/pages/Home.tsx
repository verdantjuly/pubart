import { Flex } from "../designs/TS"
import { Pubart } from "../designs/Pubart"

export function HomePage({path}: {
    path: string
}) {
    return (
        <Flex.Column style={{height: "100%"}}>
            <Pubart.Header />
            <Flex.Row style={{height: "100%"}}>
                <Pubart.Sidebar.Body />
                <div style={{
                    flex: 1,
                    backgroundColor: "var(--content-background)",
                    borderRadius: "15px",
                    padding: 15,
                }}>Hello world</div>
            </Flex.Row>
        </Flex.Column>
    )
}