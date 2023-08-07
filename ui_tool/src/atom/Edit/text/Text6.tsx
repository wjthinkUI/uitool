import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from "./TextdefalutConfig";

export const Text6 = () => {

    return (
        <div>
            <CKEditor
                editor={Editor}
                config={textDefaultConfig}
                data={
                    `<p><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p><a href="#"><span class="text-big" style="background-color:hsl(30, 75%, 60%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`
                }
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}