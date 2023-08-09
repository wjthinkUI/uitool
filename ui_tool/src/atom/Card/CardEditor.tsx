import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from '@atom/Edit/text/TextDefalutConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';
import { memo, useEffect } from 'react';

interface CardEditorProps {
  blockIndex: number;
  boxIndex: number;
  shape: 'circle' | 'normal' | 'wide' | 'big';
}
const CardEditorComponent = ({
  blockIndex,
  boxIndex,
  shape,
}: CardEditorProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page[blockIndex].src,
    shallowEqual
  );

  useEffect(() => {
    const templateMap = {
      circle: `<p style="text-align:center;"><span class="text-big">초단기한글</span></p>`,
      normal: `<p style="text-align:center;"><span class="text-big" style="color:hsl(30,75%,60%);">1:1방문</span></p><p style="text-align:center;"><strong>주 1회 / 과목당 10분</strong></p><p style="text-align:center;">학습관리 및 상담</p>`,
      wide: `<p style="text-align:center;"><span class="text-big"><strong>티칭 및 학습</strong></span></p><p style="text-align:center;">북패드 디지털 콘텐츠를 활용하여 학생들의 지면 학습을 더욱 심도 깊고 쉽게 이해하여 기본개념을 탄탄하게 합니다</p>`,
      big: `<p style="text-align:center;" class="text-big"><span class="text-big"><strong>[클래스]</strong></span></p><p style="text-align:center;">친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리
      받습니다. 전문 선생님의 학습 관리로 자기주도 학습을 성장시 킬 수
      있습니다.</p>`,
    };
    if (!fetchedContent[boxIndex]?.src) {
      dispatch(
        updateSrc({
          index: blockIndex,
          src: {
            srcIndex: boxIndex,
            src: templateMap[shape],
          },
        })
      );
    }
  }, []);

  return (
    <>
      {fetchedContent &&
        fetchedContent[boxIndex] &&
        fetchedContent[boxIndex].src !== undefined && (
          <CKEditor
            editor={Editor}
            config={textDefaultConfig}
            disabled={!location.pathname.startsWith('/edit/')}
            data={fetchedContent[boxIndex].src}
            //   data={
            //     fetchedContent[blockIndex].src[boxIndex].src
            //       ? fetchedContent[blockIndex].src[boxIndex].src
            //       : templateContent
            //   }
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              dispatch(
                updateSrc({
                  index: blockIndex,
                  src: {
                    srcIndex: boxIndex,
                    src: data,
                  },
                })
              );
            }}
          />
        )}
    </>
  );
};

export const CardEditor = memo(CardEditorComponent);
