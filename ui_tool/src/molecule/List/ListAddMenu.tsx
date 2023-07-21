import { ButtonOutline } from "../../atom/ButtonOutline"

export const ListAddMenu = () => {

    return (
        <div className="flex flex-row justify-between pt-24 pb-11">
            <div className="flex flex-col">
            <h3 className=" text-h3">
                메뉴 설정
            </h3>
            <p className=" text-body3r">
                메뉴 항목과 구조를 설정해주세요.
            </p>
            </div>
            <ButtonOutline onClick={()=> console.log('clicked')} text={'메뉴 항목 추가'}/>
        </div>
    )
}