interface SquareBigProps {
  title: string;
  description: string;
}

const CardSquareBig = ({ title, description }: SquareBigProps) => {
  return (
    <div className="cursor-pointer w-[360px] h-[433px] flex flex-col items-center m-5">
      <div className="w-[360px] h-[270px] bg-grayscale-200 mb-5"></div>
      <p className="m-3 text-center text-body2B">{title}</p>
      <p className="relative m-2 text-left text-body3r text-grayscale-800">
        <span className="absolute left-[-1rem] text-meaning">&#8226;</span>{' '}
        {description}
      </p>
    </div>
  );
};

export default CardSquareBig;
