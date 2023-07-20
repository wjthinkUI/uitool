interface CircleProps {
  description: string;
}

export const CardCircle = ({ description }: CircleProps) => {
  return (
    <div className="w-[144px] h-[174px] m-2 cursor-pointer font-noto">
      <div className="mb-3 rounded-full w-[144px] h-[144px] bg-grayscale-200"></div>
      <p className="text-center text-[15px] font-light leading-5 text-grayscale-800">
        {description}
      </p>
    </div>
  );
};
