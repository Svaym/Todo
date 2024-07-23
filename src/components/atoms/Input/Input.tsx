import { motion } from 'framer-motion';
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
    <motion.input
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`outline-none px-3 py-2 rounded-md w-[22rem] ${mx} transition-colors ease-linear duration-300 focus:bg-slate-300`}
    />
  );
}
