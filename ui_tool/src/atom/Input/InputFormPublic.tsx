import { ChangeEventHandler } from 'react';
import type { InputPageProps } from 'types';

export const InputFormPublic = ({
  inputWidth,
  placeholder,
  defaultValue,
  onChangeValue,
}: InputPageProps & {
  onChangeValue: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={onChangeValue}
      placeholder={placeholder}
      className={`${
        inputWidth === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
