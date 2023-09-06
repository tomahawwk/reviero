import {FC, useState} from 'react';
import {ITextField} from './types';

const TextField: FC<ITextField> = ({
  placeholder,
  label,
  onChange,
  className,
  type,
  step,
  min,
  value
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <label
      className={`text-field bg-white flex flex-col rounded-sm px-xs py-[7px] ${className} ${
        focus ? 'border-primary-main' : ''
      }`}>
      <span className="text-sm">{label}</span>
      <input
        type={type ? type : "text"}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        step={step}
        min={min}
        value={value}
      />
    </label>
  );
};

export default TextField;
