import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { textDefaultConfig } from "./TextDefalutConfig";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@store/store";
import { updateSrc } from '@store/slice/sliceEditPage';

export const Text4 = ({ block_id }: { block_id: number }) => {
    const dispatch = useDispatch();
    const templateContent =`<p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make&nbsp;<br>a type specimen book. It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p><p style="text-align:center;"><a href="#"><span class="text-big" style="background-color:hsl(0, 0%, 30%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`
    const fetchedContent = useSelector((state: RootState) => state.editPage.page[block_id]?.src?.[0]);
    const content = fetchedContent ? fetchedContent : templateContent;
    useEffect(() => {
        if (!fetchedContent) {
            dispatch(updateSrc({
                index: block_id,
                src: {
                    srcIndex: 0,
                    src: templateContent
                }
            }));
        }
    }, [block_id]);

    return (
        <div className="p-10">
            {(block_id !== undefined) &&
                <CKEditor
                    editor={Editor}
                    config={textDefaultConfig}
                    disabled={!location.pathname.startsWith('/edit/')}
                    data={content.src}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        dispatch(updateSrc({
                            index: block_id,
                            src: {
                                srcIndex: 0,
                                src: data
                            }
                        }))
                    }}
                />}
        </div>
    )
}