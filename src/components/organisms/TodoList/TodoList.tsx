import { MoveDown, MoveUp, X } from 'lucide-react';
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
  const [modal, setModal] = useState(false);
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
  function modalOpen() {
    setModal(!modal);
  }
  const sortTodos = todos.sort((a, b) =>
    sortOrder === 'asc' ? a.id - b.id : b.id - a.id,
  );
  return (
    <section>
      <Container>
        <Input
          onKeyDown={handleKeyDown}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Новая задача..."
        />
        <div className="flex items-center gap-x-2 mt-2">
          <Button onClick={() => setSortOrder('desc')}>
            <MoveUp className="mx-auto" />
          </Button>
          <Button onClick={() => setSortOrder('asc')}>
            <MoveDown className="mx-auto" />
          </Button>
        </div>
        <div className="rounded-md bg-white mt-2 w-[22rem]">
          {sortTodos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 px-3"
            >
              <TitleTask onClick={modalOpen}>{item.title}</TitleTask>
              <X
                className="stroke-red-600 transition-colors cursor-pointer duration-300 ease-linear hover:stroke-red-900"
                onClick={() => removeTodo(item.id)}
              />
            </div>
          ))}
          <Modal onClose={modalOpen} opened={modal} />
        </div>
      </Container>
    </section>
  );
}
