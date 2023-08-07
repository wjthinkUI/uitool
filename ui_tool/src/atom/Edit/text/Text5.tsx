import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { textDefaultConfig } from "./TextdefalutConfig";


export const Text5 = () => {

    return (
        <div>
            <CKEditor
                editor={Editor}
                config={textDefaultConfig}
                data={
                    `<p style="text-align:center;">when an unknownwhen an unknown printer took a galley of&nbsp;<br>type and scrambled it to make a type specimen book.&nbsp;<br><br>It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p>`
                }
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}