import { ChipGray, ChipOrange, ChipWhite } from "../atom/Chip"
import { CheckBox } from "../atom/checkBox"

/**상세/복제/디자인 버튼 기능 미구현 */

export interface ListProps {
    name: string,
    date: string,
    query: string,
    menu: string,
}

/**list atom : 최상위 div w-1220px 수정해야 할 듯 */
export const PageList = (props: ListProps) => {

    return (
        <div className="w-[1220px] justify-between bg-grayscale-0 border-y border-grayscale-300 px-5 py-4 relative flex flex-row content-center">
            <CheckBox />
            <p>
                {props.name}
            </p>
            <p>{props.query}</p>
            <ChipGray text={props.menu} />
            <p>{props.date}</p>
            <div className="flex flex-row gap-2">
                <ChipWhite text="상세" />
                <ChipWhite text="복제" />
                <ChipOrange text="디자인" />
            </div>
        </div>
    )
}