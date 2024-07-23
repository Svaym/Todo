import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}
export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-3 mx-auto w-full bg-white rounded-md transition-colors duration-300 ease-linear hover:bg-gray-300"
    >
      {children}
    </button>
  );
}
