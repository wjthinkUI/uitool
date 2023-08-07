import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { textDefaultConfig } from "./TextdefalutConfig";
import { useDispatch, useSelector } from "react-redux";
import { addTextBlock, setContent } from "@store/slice/sliceTextEditor";
import { useEffect, useMemo } from "react";
import { RootState } from "@store/store";
import { v4 as uuidv4 } from 'uuid';

export const Text5 = () => {
	const dispatch = useDispatch();
	const id = useMemo(() => uuidv4(), []);
	const content = useSelector((state: RootState) => state.textEditor.textBlocks[id]?.content || '<p>내용을 작성해주세요.</p>');
	const templateContent = `<p style="text-align:center;">when an unknownwhen an unknown printer took a galley of&nbsp;<br>type and scrambled it to make a type specimen book.&nbsp;<br><br>It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p>`
    		
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