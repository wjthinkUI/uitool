import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { setTitle } from '@store/slice/sliceModal';
import { setUrl } from '@store/slice/sliceModal';
import type { InputPageProps } from 'types';
//퍼센트로 바꾸기
export const InputPageInfo = ({
  type,
  inputWidth,
  placeholder,
  isLoadValue,
}: InputPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.modal);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMap = {
      title: setTitle,
      url: setUrl,
    };
    const dispathFn = inputMap[type];
    dispatch(dispathFn(e.target.value));
  };

  return (
    <input
      type={type}
      defaultValue={isLoadValue ? data[type] : ''}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={`${
        inputWidth === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
