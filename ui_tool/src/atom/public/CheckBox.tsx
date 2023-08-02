import { CheckBoxProps } from "types";

export const CheckBox = ({checked, onChange}:CheckBoxProps) => {
    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }
    return (
        <>
            <input checked={checked} onChange={handleCheck} type="checkbox" className="w-6 h-6 bg-gray-200 border cursor-pointer hover:bg-gray-300 focus:outline-none"/>
        </>
    )
}