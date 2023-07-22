interface InputLoginProps {
  type: 'Email' | 'Password';
}

export const InputLogin = ({ type }: InputLoginProps) => {
  return (
    <div className="relative mt-5 mb-5">
      <label
        htmlFor="email"
        className="absolute text-gray-600 text-body5m top-2 left-3"
      >
        {type}
        <span className="text-meaning"> *</span>
      </label>
      <input
        id="email"
        type={type}
        className="w-[394px] h-[60px] rounded-[10px] bg-grayscale-50 pl-3 pt-1"
      />
    </div>
  );
};
