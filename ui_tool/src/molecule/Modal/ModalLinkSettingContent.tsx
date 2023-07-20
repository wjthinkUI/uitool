import { ModalTitle } from '../../atom/Modal/ModalTitle';

export const ModalLinkSettingContent = () => {
  return (
    <>
      <ModalTitle />
      {/* 라디오 버튼은 더미 */}
      <div>
        <input type="radio" id="nolink" />
        <label htmlFor="nolink">링크없음</label>
      </div>
      <div>
        <input type="radio" id="internalLink" />
        <label htmlFor="internalLink">내부페이지</label>
      </div>
      <div>
        <input type="radio" id="url" />
        <label htmlFor="url">URL 입력</label>
      </div>
    </>
  );
};
