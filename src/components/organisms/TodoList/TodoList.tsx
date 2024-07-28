import { AnimatePresence, motion } from 'framer-motion';
import { Check, MoveDown, MoveUp, X } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Input from '../../atoms/Input/Input';
import TitleTask from '../../atoms/TitleTask/TitleTask';
import Modal from '../../molecules/Modal/Modal';

interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
}
export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const completedTasks = todos.filter(item => item.isCompleted).length;
  const progressWidth = (completedTasks / todos.length) * 100;
  const [modal, setModal] = useState<{
    isOpen: boolean;
    todoId: number | null;
  }>({ isOpen: false, todoId: null });
  const [sortOrder, setSortOrder] = useState<string>('asc');
  function addTodos(item: TodoProps) {
    setTodos((prevTodos) => [...prevTodos, item]);
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (todo.trim()) {
        addTodos({ id: Date.now(), title: todo, isCompleted: false });
        setTodo('');
      }
    }
  }
  function removeTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }
  function changeTodoList(id: number, newTodo: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTodo } : todo,
      ),
    );
    setModal({ isOpen: false, todoId: null });
  }
  function IsCcompletedToDo(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !completed } : todo,
      ),
    );
  }
  function modalOpen(id: number) {
    setModal({ isOpen: true, todoId: id });
  }
  const sortTodos = todos.sort((a, b) =>
    sortOrder === 'asc' ? a.id - b.id : b.id - a.id,
  );
  return (
    <section>
      <Container>
        <AnimatePresence>
          <Input
            onKeyDown={handleKeyDown}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Новая задача..."
          />
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className="flex items-center gap-x-2 mt-2"
          >
            <Button onClick={() => setSortOrder('desc')}>
              <MoveUp className="mx-auto" />
            </Button>
            <Button onClick={() => setSortOrder('asc')}>
              <MoveDown className="mx-auto" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }} className='bg-white rounded-md h-7 flex items-center justify-center mt-2 p-3'>
              <div className='bg-gray-100 rounded-md h-2 w-full relative'>
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ ease: 'easeOut', duration: 0.5 }} className='absolute top-0 left-0 w-full bg-green-600 h-2 rounded-md'>
                </motion.div>
              </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className="rounded-md bg-white mt-2 w-[22rem]"
          >
            {sortTodos.map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: '120%' }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                key={item.id}
                className="flex items-center justify-between py-2 px-3"
              >
                <TitleTask textColor={`${item.isCompleted ? 'text-green-600 line-through' : ''}`} onClick={() => modalOpen(item.id)}>
                  {item.title}
                </TitleTask>
                <div className='flex items-center '>
                  <Check className="stroke-green-600 h-8 transition-colors cursor-pointer duration-300 ease-linear hover:stroke-green-900"
                    onClick={() => IsCcompletedToDo(item.id, item.isCompleted)} />
                  <X
                    className="stroke-red-600 transition-colors h-8 cursor-pointer duration-300 ease-linear hover:stroke-red-900"
                    onClick={() => removeTodo(item.id)}
                  />
                </div>
              </motion.div>
            ))}
            {modal.isOpen && (
              <Modal
                onClose={(newTodo) => changeTodoList(modal.todoId!, newTodo)}
                opened={modal.isOpen}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
