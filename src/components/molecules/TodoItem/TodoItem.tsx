import { Pencil, X } from 'lucide-react';
import React from 'react';

import TitleTask from '../../atoms/TitleTask/TitleTask';

interface TodoItemProps {
  children: string;
}
export default function TodoItem({ children }: TodoItemProps) {
  return (
    <div className="py-2 px-3 flex items-center justify-between">
      <TitleTask>{children}</TitleTask>
      <div className="flex items-center gap-x-2">
        <Pencil />
        <X />
      </div>
    </div>
  );
}
