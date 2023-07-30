interface ModalRadioProps {
  id: string;
  value: string;
  name: string;
  label: string;
  onChange: (event: any) => void;
}

export const ModalRadio = ({
  id,
  value,
  name,
  label,
  onChange,
}: ModalRadioProps) => {
  return (
    <div className="flex m-2">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        className="m-0 w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary-950 ring-1 ring-primary-950 checked:border-grayscale-0 checked:border-[3px] peer/noLink"
      />
      <label htmlFor={id} className="pl-3 text-body4m">
        {label}
      </label>
    </div>
  );
};
