import { AppDispatch, RootState } from '@store/store';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from '@atom/Edit/text/TextDefalutConfig';
export const Table = () => {
  return (
    <CKEditor
      editor={Editor}
      config={textDefaultConfig}
      disabled={!location.pathname.startsWith('/edit/')}
      data={``}
      onChange={(event: any, editor: any) => {}}
    />
  );
};
