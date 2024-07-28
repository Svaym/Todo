import React from 'react';

interface TitleTaskProps {
  children: string;
  onClick: () => void;
  textColor?: string
}
export default function TitleTask({ children, onClick, textColor }: TitleTaskProps) {
  return (
    <h2
      onClick={onClick}
      className={`text-lg font-medium truncate cursor-pointer ${textColor} transition-colors duration-300 ease-linear hover:text-gray-400`}
    >
      {children}
    </h2>
  );
}

