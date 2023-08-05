import { Image } from './ImageBox';
interface ImageProps {
  block_id: number;
}
export const Image4 = ({ block_id }: ImageProps) => {
  return (
    <div className="w-[100%] h-auto mx-auto flex justify-center items-center gap-5 overflow-hidden">
      <Image height="300px" boxIndex={0} blockIndex={block_id} />
      <Image height="300px" boxIndex={1} blockIndex={block_id} />
      <Image height="300px" boxIndex={2} blockIndex={block_id} />
      <Image height="300px" boxIndex={3} blockIndex={block_id} />
    </div>
  );
};
