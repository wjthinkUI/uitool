import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { textDefaultConfig } from "./TextdefalutConfig";
import { useDispatch, useSelector } from "react-redux";
import { addTextBlock, setContent } from "@store/slice/sliceTextEditor";
import { useEffect, useMemo } from "react";
import { RootState } from "@store/store";
import { v4 as uuidv4 } from 'uuid';

export const Text6 = () => {
	const dispatch = useDispatch();
	const id = useMemo(() => uuidv4(), []);
	const content = useSelector((state: RootState) => state.textEditor.textBlocks[id]?.content || '<p>내용을 작성해주세요.</p>');
	const templateContent = `<p><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p><a href="#"><span class="text-big" style="background-color:hsl(30, 75%, 60%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`
    
	useEffect(() => {
		dispatch(addTextBlock({id, content: templateContent}));
	}, [dispatch, id]);

    return (
        <div className="p-10">
            <CKEditor
                editor={Editor}
                config={textDefaultConfig}
                data={content}
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    dispatch(setContent({id, content: data}));					
                }}
            />
        </div>
    )
}