interface SquareWideProps {
  title: string;
  description: string;
}

const CardSquareWide = ({ title, description }: SquareWideProps) => {
  return (
    <div className="cursor-pointer w-[273.59px] h-[277.39px] flex flex-col items-center m-2">
      <div className="w-[157px] h-[157px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center text-body2B">{title}</p>
      <p className="m-2 text-center text-body3r text-grayscale-800">
        {description}
      </p>
    </div>
  );
};

export default CardSquareWide;
