import { MouseEventHandler } from "react";

interface btnType {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const ButtonOutline = ({text, onClick}:btnType) => {

    return (
        <button onClick={onClick} className="px-[27px] py-[11px] rounded-[7px] border border-primary-950 bg-primary-100 text-primary-950">
            {text}
        </button>
    )
}