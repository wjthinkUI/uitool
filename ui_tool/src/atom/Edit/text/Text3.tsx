import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { textDefaultConfig } from "./TextdefalutConfig";


export const Text3 = () => {
    return (
        <div>
            <CKEditor
                editor={Editor}
                config={textDefaultConfig}
                data={
                    `<p style="text-align:center;"><span class="text-huge"><strong>Lorem Ipsum has been&nbsp;</strong></span><br><span class="text-huge"><strong>the industry's standard</strong></span></p>`
                }
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}