import { X } from 'lucide-react';
import React, { useState } from 'react';

import Container from '../../atoms/Container/Container';
import Input from '../../atoms/Input/Input';
import TitleTask from '../../atoms/TitleTask/TitleTask';

interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

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

  return (
    <section>
      <Container>
        <Input
          onKeyDown={handleKeyDown}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="rounded-md bg-white mt-3 w-[22rem]">
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 px-3"
            >
              <TitleTask onClick={() => removeTodo(item.id)}>
                {item.title}
              </TitleTask>
              <X
                className="stroke-red-600 transition-colors cursor-pointer duration-300 ease-linear hover:stroke-red-900"
                onClick={() => removeTodo(item.id)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
