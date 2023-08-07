import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from "./TextdefalutConfig";

export const Text1 = () => {
    return (
        <div>
            <CKEditor
                editor={Editor}
                config={textDefaultConfig}
                data={
                    `<p style="text-align:center;"><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`
                }
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}