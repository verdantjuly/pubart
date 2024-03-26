import { Icon, IconBuilder, IconSize } from "../components/Icon";
import { TouchRipple } from "../components/TouchRipple";
import { TS } from "./TS";

export namespace Pubart {
    export function Header() {
        return (
            <div style={{
                padding: "var(--content-padding)",
                display: "flex",
                gap: "5px",
            }}>
                <Icon name="title-logo" width={99} height={30} />
                <span>KR</span>
            </div>
        )
    }

    export class Sidebar {
        static Body() {
            return (
                <TS.FlexColumn style={{
                    width: "220px",
                    height: "100%",
                    borderRadius: "0px 15px 15px 0px",
                }}>
                    <Sidebar.Item selected={true} title="홈" iconName={"home"} />
                    <Sidebar.Item selected={false} title="탐색" iconName={"navigate"} />
                    <Sidebar.Item selected={false} title="사용자" iconName={"user"} />
                </TS.FlexColumn>
            )
        }

        static Item({selected, iconName, title}: {
            selected: boolean,
            iconName: string,
            title: string,
        }) {
            return (
                <TouchRipple onTap={selected ? null : () => {}}>
                    <TS.FlexRow className={`sidebar-item ${selected ? "selected" : ""}`}>
                        <Icon fill={selected} name={iconName} size={IconSize.inNavigate} />
                        <p>{title}</p>
                    </TS.FlexRow>
                </TouchRipple>
            )
        }
    }
}