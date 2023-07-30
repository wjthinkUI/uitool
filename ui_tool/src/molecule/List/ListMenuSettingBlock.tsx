import { InputPageSelector } from "@atom/Input/InputPageSelector";
import { InputPageInfo } from "@atom/Input/InputPageInfo";
import { CheckBox } from "@atom/public/CheckBox";


export const ListMenuSettingBlock = () => {

    return (
        <div className="bg-white w-[1080px] h-[180px] border-grayscale-300 border rounded items-center p-4">
            <label className="text-body2m text-grayscale-600">제목</label>
            <InputPageInfo type={"title"} inputWidth={"long"} placeholder={""} />
            <div className="flex items-center">
            <label className="text-body2m text-grayscale-600">링크</label>
            <InputPageSelector />
            <CheckBox />
            <label className="ml-3 text-body2m text-grayscale-600">새창 열기</label>
            </div>
        </div>
    )
};