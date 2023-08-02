import { ChangeEvent } from 'react';

import type { InputPageProps } from 'types';
//퍼센트로 바꾸기
export const InputFormPublic = ({
  type,
  inputWidth,
  placeholder,
  defaultValue,
  onChangeValue,
}: InputPageProps & {onChangeValue: (value: string) => void}) => {
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(onChangeValue) {onChangeValue(e.target.value)};
  };

  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={`${
        inputWidth === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
