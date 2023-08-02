import { InputPageSelector } from "@atom/Input/InputPageSelector";
import { InputPageInfo } from "@atom/Input/InputPageInfo";
import { CheckBox } from "@atom/public/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import sliceModal from "@store/slice/sliceModal";
import { setTitle, setUrl, setBlankOption } from "@store/slice/sliceModal";
import { useState } from "react";
import { ButtonOutline } from "@atom/Button/ButtonOutline";

interface ListMenuSettingBlockProps {
    id: number;
    name: string;
    path: string;
}

export const ListMenuSettingBlock = ({ id, name, path }:ListMenuSettingBlockProps) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const pageData = useSelector((state: any) => state.modal);
    // const handleTitleChange = (event: any) => {
    //     dispatch(setTitle(event.target.value));
    // };
    // const handleUrlChange = (event: any) => {

    //     dispatch(setUrl(event.target.value));
    // };
    const handleBlankOptionChange = (isChecked:boolean) => {
        setChecked(isChecked);
        dispatch(setBlankOption());
    };

    const formData = {
        title: pageData.title,
        url: pageData.url,
        blankOption: pageData.blankOption,
    }

    //id 받아야함.
    const handleTitleChange = () => {
        // dispatch(setTitle());
        // dispatch(setUrl());
        dispatch(setBlankOption());
    };
    
    return (
        <div className="bg-white w-[1080px] h-[180px] border-grayscale-300 border rounded items-center p-4 float-right">
            <p>{id},{name},{path}</p>
            <label className="text-body2m text-grayscale-600">제목</label>
            <InputPageInfo type={"title"} inputWidth={"long"} placeholder={""} defaultValue={name}/>
            <div className="flex items-center">
                <label className="text-body2m text-grayscale-600">링크</label>
                <InputPageSelector />
                <CheckBox checked={checked} onChange={handleBlankOptionChange}/>
                <label className="ml-3 grow text-body2m text-grayscale-600">새창 열기</label>
                <ButtonOutline text={"저장하기"} onClick={handleTitleChange} />
            </div>
        </div>
    )
};
/**
 * store 에서 가져온 데이터를 뿌려준다.
 * store 에서 가져온 데이터를 수정한다.
 * store 에서 가져온 데이터를 삭제한다.
 * 
 */
