import { useState } from 'react';
import { InputPageSelect } from '@atom/Input/InputPageSelect';
import { InputPageInfo } from '@atom/Input/InputPageInfo';

export const ModalLinkSettingContent = () => {
  const [selectedOption, setSelectedOption] = useState('noLink');

  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col m-3 mt-0 grow">
      <div className="mt-5 mb-8 gorw-0 shrink-0">
        <div>
          <input
            type="radio"
            name="linksetting"
            value="noLink"
            id="noLink"
            className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/noLink"
            checked={selectedOption === 'noLink'}
            onChange={handleRadioChange}
          />
          <label htmlFor="noLink" className="pl-3 text-body4m">
            링크 없음
          </label>
        </div>
      </div>
      <div className="h-[90px]">
        <div>
          <input
            type="radio"
            name="linksetting"
            value="internalLink"
            id="internalLink"
            className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/internalLink"
            checked={selectedOption === 'internalLink'}
            onChange={handleRadioChange}
          />
          <label htmlFor="internalLink" className="pb-3 pl-3 text-body4m">
            내부 페이지 링크
          </label>
        </div>
        <div className={selectedOption === 'internalLink' ? 'block' : 'hidden'}>
          <InputPageSelect />
        </div>
      </div>
      <div className="h-[90px]">
        <div>
          <input
            type="radio"
            name="linksetting"
            value="setUrl"
            id="setUrl"
            className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/setUrl"
            checked={selectedOption === 'setUrl'}
            onChange={handleRadioChange}
          />
          <label htmlFor="setUrl" className="pb-3 pl-3 text-body4m">
            URL 입력
          </label>
        </div>
        <div className={selectedOption === 'setUrl' ? 'block' : 'hidden'}>
          <InputPageInfo
            type="short"
            placeholder="http://로 시작되는 링크 주소 입력"
          />
        </div>
      </div>
    </div>
  );
};
