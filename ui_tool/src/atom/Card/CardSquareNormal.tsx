import type { SquareNoramlProps } from "types";

export const CardSquareNomal = ({
  title,
  period,
  description,
}: SquareNoramlProps) => {
  return (
    <div className="w-[192px] h-[302px] m-2 cursor-pointer font-noto">
      <div className="w-[192px] h-[182px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center text-[20px] font-light text-primary-700 leading-8">
        {title}
      </p>
      <p className="m-2 text-center text-[15px] font-bold leading-5">
        {period}
      </p>
      <p className="m-2 text-center leading-5 text-[15px] text-grayscale-800">
        {description}
      </p>
    </div>
  );
};
