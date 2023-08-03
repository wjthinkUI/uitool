import { InputPageSelector } from "@atom/Input/InputPageSelectorPublic";
import { InputFormPublic } from "@atom/Input/InputFormPublic";
import { CheckBox } from "@atom/public/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import sliceModal from "@store/slice/sliceModal";
import { setTitle, setUrl, setBlankOption } from "@store/slice/sliceNavigations";
import { useEffect, useState } from "react";
import { ButtonOutline } from "@atom/Button/ButtonOutline";
import { useSubmit } from "react-router-dom";

interface ListMenuSettingBlockProps {
    id: number;
    idx?: number;
    name: string;
    path: string;
    isParent: boolean;
    category: string;
    date: string;
}

export const ListMenuSettingBlock = ({ id, idx, name, path, isParent, category, date }:ListMenuSettingBlockProps) => {
    const [checked, setChecked] = useState(false);
    const [changeTitle, setChangeTitle] = useState(name);
    const [changeUrl, setChangeUrl] = useState(path);
    const dispatch = useDispatch();
    const menuData = useSelector((state: any) => state.navigations);

    const submit = useSubmit();

    // const handleTitleChange = (event: any) => {
    //     dispatch(setTitle(event.target.value));
    // };
    // const handleUrlChange = (event: any) => {

    //     dispatch(setUrl(event.target.value));
    // };
    const handleBlankOptionChange = (isChecked:boolean) => {
        setChecked(isChecked);
        // dispatch(setBlankOption());
    };

    //id 받아야함.
    const handleTitleChange = () => {
        const submitData = {
            id: id,
            idx: idx || 0,
            title: changeTitle,
            url: changeUrl,
            // isParent: isParent,
            // category: category,
            // date: date,
        };
        submit(submitData, {
            method: 'PUT',
            action: '/adminlist/menu', 
            encType: 'application/json',
        });
    };

    useEffect(() => {
        dispatch(setTitle({isParent: isParent, id: id, idx: idx, title: changeTitle}));
        dispatch(setUrl(changeUrl));
        dispatch(setBlankOption());
    }, [changeTitle, changeUrl, checked]);


    /**
     * isParent true 일때
     * 1단 [id]로 접근
     * isParam false 일때
     * 2단 [id][idx]로 접근
     */
    
    return (
        <div className="bg-white w-[1080px] h-[180px] border-grayscale-300 border rounded items-center p-4 float-right">
            <p>{id},{idx},{changeTitle},{changeUrl},{String(checked)}</p>
            <label className="text-body2m text-grayscale-600">제목</label>
            <InputFormPublic type={"title"} inputWidth={"long"} placeholder={""} defaultValue={name} onChangeValue={setChangeTitle}/>
            <div className="flex items-center">
                <label className="text-body2m text-grayscale-600">링크</label>
                <InputPageSelector defaultValue={path} onChangeUrl={setChangeUrl}/>
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
