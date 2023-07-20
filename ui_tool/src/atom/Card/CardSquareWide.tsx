interface SquareWideProps {
  title: string;
  description: string;
}

export const CardSquareWide = ({ title, description }: SquareWideProps) => {
  return (
    <div className="cursor-pointer w-[273.59px] h-[277.39px] flex flex-col flex-shrink-0 items-center m-2 font-noto">
      <div className="w-[157px] h-[157px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center text-[17px] font-bold leading-7">{title}</p>
      <p className="m-2 text-center text-[15px] font-light leading-5 text-grayscale-800">
        {description}
      </p>
    </div>
  );
};
