import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function Input({ value, onChange, onKeyDown }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="outline-none px-3 py-2 rounded-md transition-colors ease-linear duration-300 focus:bg-slate-300"
    />
  );
}
