import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  mx?: string;
}
export default function Input({
  value,
  onChange,
  onKeyDown,
  placeholder,
  mx,
}: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`outline-none px-3 py-2 rounded-md w-[22rem] ${mx} transition-colors ease-linear duration-300 focus:bg-slate-300`}
    />
  );
}
