import React from 'react';

interface TitleTaskProps {
  children: string;
}
export default function TitleTask({ children }: TitleTaskProps) {
  return <h2>{children}</h2>;
}
