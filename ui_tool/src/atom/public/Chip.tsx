import { Chip } from 'types';

export const ChipGray = ({ text }: Chip) => {
  return (
    <div className="inline-flex items-center justify-center gap-1.5 py-1 px-1 rounded-full bg-grayscale-300 w-[84px]">
      <p className="text-body4B text-grayscale-0">{text}</p>
    </div>
  );
};

export const ChipWhite = ({ text, onClick }: Chip) => {
  return (
    <div
      className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-1 px-2 rounded-full bg-grayscale-0 border border-grayscale-300"
      onClick={onClick}
    >
      <p className="text-body4B text-grayscale-300">{text}</p>
    </div>
  );
};

export const ChipOrange = ({ text, onClick }: Chip) => {
  return (
    <div
      className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-1 px-2 rounded-full bg-primary-950"
      onClick={onClick}
    >
      <p className="text-body4B text-grayscale-0">{text}</p>
    </div>
  );
};
