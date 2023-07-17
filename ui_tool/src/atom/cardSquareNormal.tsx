interface SquareNoramlProps {
  title: string;
  period: string;
  description: string;
}

const CardSquareNomal = ({ title, period, description }: SquareNoramlProps) => {
  return (
    <div className="w-48 h-[302px] m-2 cursor-pointer">
      <div className="w-48 h-[182px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center text-body1r text-primary-700">{title}</p>
      <p className="m-2 text-center text-body3B">{period}</p>
      <p className="m-2 text-center text-body4r text-grayscale-800">
        {description}
      </p>
    </div>
  );
};

export default CardSquareNomal;
