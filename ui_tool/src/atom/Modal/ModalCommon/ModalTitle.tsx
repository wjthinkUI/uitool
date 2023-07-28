import type { ModalTitleProps } from "types";

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <div className="m-5 mt-6">
      <div className="text-h4">{title}</div>
    </div>
  );
};
