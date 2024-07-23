import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}
export default function Modal({ opened, onClose }: ModalProps) {
  const [changeTodo, setChangeTodo] = useState('');
  if (!opened) {
    return null;
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (changeTodo.trim()) {
        setChangeTodo('');
        onClose();
      }
    }
  }
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-200 p-5 rounded-md w-1/3">
        <Input
          onChange={(e) => setChangeTodo(e.target.value)}
          mx="mx-auto block"
          value={changeTodo}
          onKeyDown={handleKeyDown}
          placeholder="Изменить задачу"
        />
      </div>
    </>
  );
}
