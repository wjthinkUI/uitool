import { InputPageTitleProps } from "types";

export const InputPageInfo = ({ type, placeholder }: InputPageTitleProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${
        type === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
