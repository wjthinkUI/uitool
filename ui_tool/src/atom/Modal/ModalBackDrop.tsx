// export interface cancelProps {
//   onCancel: () => void;
// }

//{ onCancel }: cancelProps
export const ModalBackDrop = () => {
  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-screen backdrop-brightness-75"
      //   onClick={onCancel}
    />
  );
};
