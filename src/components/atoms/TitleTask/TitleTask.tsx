import React from 'react';

interface TitleTaskProps {
  children: string;
  onClick: () => void;
}
export default function TitleTask({ children, onClick }: TitleTaskProps) {
  return (
    <h2
      onClick={onClick}
      className="text-lg font-medium truncate cursor-pointer transition-colors duration-300 ease-linear hover:text-gray-400 "
    >
      {children}
    </h2>
  );
}
