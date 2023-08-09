import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from './TextDefalutConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';

const templateContent = `<p style="text-align:center;"><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`;
export const Text1 = ({ block_id }: { block_id: number }) => {
  const dispatch = useDispatch();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page[block_id],
    shallowEqual
  );
  // console.log('fetchedContent= ', fetchedContent);
  // const content = fetchedContent.src ? fetchedContent.src : templateContent;
  // console.log(fetchedContent[block_id].src[0].src);
  useEffect(() => {
    if (!fetchedContent.src[0].src) {
      // console.log('dispatch!!!');
      dispatch(
        updateSrc({
          index: block_id,
          src: {
            srcIndex: 0,
            src: templateContent,
          },
        })
      );
    }
  }, []);

  return (
    <div className="p-10">
      {fetchedContent.src && fetchedContent.src[0].src && (
        <CKEditor
          editor={Editor}
          config={textDefaultConfig}
          disabled={!location.pathname.startsWith('/edit/')}
          data={
            fetchedContent.src && fetchedContent.src[0].src
              ? fetchedContent.src[0].src
              : templateContent
          }
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            dispatch(
              updateSrc({
                index: block_id,
                src: {
                  srcIndex: 0,
                  src: data,
                },
              })
            );
          }}
        />
      )}
    </div>
  );
};
