import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { setTitle } from '@store/slice/sliceModal';
import { setUrl } from '@store/slice/sliceModal';
import type { InputPageProps } from 'types';
import { ChangeEvent } from 'react';
//퍼센트로 바꾸기
export const InputPageInfo = ({
  type,
  inputWidth,
  placeholder,
}: InputPageProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const inputMap = {
    title: setTitle,
    url: setUrl,
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dispathFn = inputMap[type];
    dispatch(dispathFn(e.target.value));
  };
  return (
    <input
      type="text"
      onChange={handleInputChange}
      placeholder={placeholder}
      className={`${
        inputWidth === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
