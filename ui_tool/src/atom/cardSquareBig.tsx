interface SquareBigProps {
  title: string;
  description: string;
}

const CardSquareBig = ({ title, description }: SquareBigProps) => {
  return (
    <div className="cursor-pointer w-[360px] h-[433px] flex flex-col items-center m-5 font-noto">
      <div className="w-[360px] h-[270px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center font-bold text-[22px] leading-[25px]">
        {title}
      </p>
      <p className="relative m-2 text-left text-grayscale-800">
        <span className="absolute left-[-1rem] text-[17px] font-light leading-[25px] text-meaning">
          &#8226;
        </span>
        {description}
      </p>
    </div>
  );
};

export default CardSquareBig;
