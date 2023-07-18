import { ChipGray, ChipOrange, ChipWhite } from "../atom/Chip"
import { CheckBox } from "../atom/checkBox"

interface ListProps {
    name: string,
    date: string,
    query: string,
}

/**list atom : 최상위 div w-1220px 수정해야 할 듯 */
export const List = (props: ListProps) => {

    return (
        <div className="w-[1220px] justify-between border-y border-grayscale-300 px-5 py-4 relative flex flex-row content-center">
            <CheckBox />
            <p>
                {props.name}
            </p>
            <p>{props.query}</p>
            <ChipGray text="웅진북클럽" />
            <p>{props.date}</p>
            <div className="flex flex-row gap-2">
                <ChipWhite text="상세" />
                <ChipWhite text="복제" />
                <ChipOrange text="디자인" />
            </div>
        </div>
    )
}