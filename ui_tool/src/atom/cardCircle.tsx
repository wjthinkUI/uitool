interface CircleProps {
  description: string;
}

const CardCircle = ({ description }: CircleProps) => {
  return (
    <div className="w-36 h-[174px] m-2 cursor-pointer">
      <div className="mb-3 rounded-full w-36 h-36 bg-grayscale-200"></div>
      <p className="text-center text-body4r text-grayscale-800">
        {description}
      </p>
    </div>
  );
};

export default CardCircle;
