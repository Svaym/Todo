import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';

interface ModalProps {
  opened: boolean;
  onClose: (newTodo: string) => void;
}
export default function Modal({ opened, onClose }: ModalProps) {
  const [changeTodo, setChangeTodo] = useState('');
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  if (!opened) {
    return null;
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (changeTodo.trim().length > 0) {
        onClose(changeTodo);
        setChangeTodo('');
      }
    }
  }
  function handleBackgroundClick() {
    if (changeTodo.trim().length > 0) {
      onClose(changeTodo);
    }
  }
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          variants={variants}
          onClick={handleBackgroundClick}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2.5 }}
          exit={{ opacity: 0 }}
          variants={variants}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-200 p-5 rounded-md w-1/3"
        >
          <Input
            onChange={(e) => setChangeTodo(e.target.value)}
            mx="mx-auto block"
            value={changeTodo}
            onKeyDown={handleKeyDown}
            placeholder="Изменить задачу"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
