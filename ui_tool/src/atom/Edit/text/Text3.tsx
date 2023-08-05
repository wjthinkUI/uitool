import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'



export const Text3 = () => {
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