export const ModalBlockDesignWrapper = () => {
  return (
    <div className="flex justify-center w-[950px] h-[500px] flex-wrap grow overflow-y-auto custom__scrollbar">
      <Big />
    </div>
  );
};

const Big = () => {
  return (
    <div className="w-[924px] h-[482px] bg-grayscale-0 rounded-[10px] m-[5px]">
      <div
        className="w-[97px] h-[72px] border-dashed border-[1px] border-grayscale-800 m-1"
        onMouseEnter={handleMouse}
      ></div>
      <div className="w-[97px] h-[72px] border-dashed border-[1px] border-grayscale-800 m-1"></div>
      <div className="w-[97px] h-[72px] border-dashed border-[1px] border-grayscale-800 m-1"></div>
      <div className="w-[97px] h-[72px] border-dashed border-[1px] border-grayscale-800 m-1"></div>
    </div>
  );
};

const handleMouse = (e: any) => {
  console.log(e);
};

const Normal = () => {
  return (
    <div className="w-[457px] h-[152px] bg-grayscale-0 rounded-[10px] m-[5px]"></div>
  );
};

const Small = () => {
  return (
    <div className="w-[457px] h-[97px] bg-grayscale-0 rounded-[10px] m-[5px]"></div>
  );
};
