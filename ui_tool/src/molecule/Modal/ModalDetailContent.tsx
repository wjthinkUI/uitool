import { ModalTitle } from '@atom/Modal/ModalTitle';

export const ModalDetailContent = () => {
  return (
    <>
      <ModalTitle />
      <input
        type="text"
        className="w-[200px] h-[50px] ml-5 border-solid border-4"
        placeholder="DUMMY INPUT"
      />
      <input
        type="text"
        className="w-[200px] h-[50px] ml-5 border-solid border-4"
        placeholder="DUMMY INPUT"
      />
      <div className="ml-5">https://www.wjthinkbig.com/page/DUMMY</div>
    </>
  );
};
