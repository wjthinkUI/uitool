import { Image } from './ImageBox';

export const Image2 = () => {
  return (
    <div className="w-[100%] h-auto mx-auto flex justify-center items-center gap-5 overflow-hidden">
      <Image height="300px" boxIndex={0} />
      <Image height="300px" boxIndex={1} />
    </div>
  );
};
