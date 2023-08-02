import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import {
  setTitle,
  setUrl,
  setDuplTitle,
  setDuplUrl,
} from '@store/slice/sliceModal';
import type { InputPageProps } from 'types';
//퍼센트로 바꾸기
export const InputPageInfo = ({
  type,
  inputWidth,
  placeholder,
  defaultValue,
  onChangeValue,
}: InputPageProps & {onChangeValue: (value: string) => void}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState(defaultValue || '');

  //>>>이전 코드
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const inputMap = {
  //     title: setTitle,
  //     url: setUrl,
  //     duplTitle: setDuplTitle,
  //     duplUrl: setDuplUrl,
  //   };
  //   const dispathFn = inputMap[type];
  //   dispatch(dispathFn(e.target.value));
  // };

  //>>>이후 코드
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
