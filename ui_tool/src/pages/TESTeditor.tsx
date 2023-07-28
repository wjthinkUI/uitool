import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

const editorConfiguration = {
  plugins: [Essentials, Bold, Italic, Paragraph],
  toolbar: ['bold', 'italic'],
};

interface EditorProps {
  desc?: string;
  callback: (data: string) => void;
}

export const TESTeditor = ({ desc, callback }: EditorProps) => {
  return (
    <div className="w-60 h-52">
      <h2>Using CKEditor 5 from source in React</h2>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={desc}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          //   const setData = editor.setData(data);
          //   console.log(setData);
          //   callback(setData);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};
