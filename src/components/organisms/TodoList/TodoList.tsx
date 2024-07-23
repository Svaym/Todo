import React, { useId, useState } from 'react';

import Container from '../../atoms/Container/Container';
import Input from '../../atoms/Input/Input';
import TodoItem from '../../molecules/TodoItem/TodoItem';

interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
}
export default function TodoList() {
  const id = useId();
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
  return (
    <section>
      <Container>
        <Input
          onKeyDown={handleKeyDown}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="rounded-md bg-white mt-3">
          {todos.map((item) => (
            <TodoItem key={id}>{item.title}</TodoItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
