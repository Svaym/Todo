import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-7 w-full md:px-4 xxs:px-2;">
      {children}
    </div>
  );
}
