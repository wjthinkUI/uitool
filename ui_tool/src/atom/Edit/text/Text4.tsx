import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'



export const Text4 = () => {
    const defaultConfig = {
		toolbar: {
			items: [
				'fontFamily',
				'fontSize',
				'fontColor',
				'fontBackgroundColor',
				'highlight',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'alignment',
				'-',
				'redo',
				'undo',
				'|',
				'imageUpload',
				'imageInsert',
				'mediaEmbed',
				'link',
				'insertTable',
				'removeFormat'
			],
			shouldNotGroupWhenFull: true
		},
		language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'linkImage'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		}
	};
    return (
        <div>
            <CKEditor
                editor={Editor}
                config={defaultConfig}
                data={
                    `<p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make&nbsp;<br>a type specimen book. It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p><p style="text-align:center;"><a href="#"><span class="text-big" style="background-color:hsl(0, 0%, 30%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`
                }
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}