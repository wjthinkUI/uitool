import { useState } from 'react';
import { InputPageSelector } from '@atom/Input/InputPageSelector';
import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { ModalRadio } from '@atom/Modal/ModalCommon/ModalRadio';
export const ModalLinkSettingContent = () => {
  const [selectedOption, setSelectedOption] = useState('noLink');

  const handleRadioChange = (event: any) => {
    setSelectedOption(() => event.target.value);
    console.log(selectedOption);
  };

  return (
    <div className="flex flex-col m-3 mt-0 grow">
      <div className="mt-4 mb-4 gorw-0 shrink-0">
        <ModalRadio
          id="noLink"
          value="noLink"
          name="linksetting"
          label="링크없음"
          onChange={handleRadioChange}
        />
        {/* <div className="flex ">
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
        </div> */}
      </div>
      <div className="h-[90px]">
        <ModalRadio
          id="internalLink"
          value="internalLink"
          name="linksetting"
          label="내부 페이지 링크"
          onChange={handleRadioChange}
        />
        {/* <div className="flex">
          <input
            type="radio"
            name="linksetting"
            value="internalLink"
            id="internalLink"
            className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/internalLink"
            checked={selectedOption === 'internalLink'}
            onChange={handleRadioChange}
          />
          <label htmlFor="internalLink" className="pl-3 text-body4m">
            내부 페이지 링크
          </label>
        </div> */}
        <InputPageSelector />
      </div>
      <div className="h-[90px]">
        <ModalRadio
          id="setUrl"
          value="setUrl"
          name="linksetting"
          label="URL 입력"
          onChange={handleRadioChange}
        />
        {/* <div className="flex">
          <input
            type="radio"
            name="linksetting"
            value="setUrl"
            id="setUrl"
            className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/setUrl"
            checked={selectedOption === 'setUrl'}
            onChange={handleRadioChange}
          />
          <label htmlFor="setUrl" className="pl-3 text-body4m">
            URL 입력
          </label>
        </div> */}
        <InputPageInfo
          type="url"
          inputWidth="short"
          placeholder="http://로 시작되는 링크 주소 입력"
        />
      </div>
    </div>
  );
};
