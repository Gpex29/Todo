import { useState } from 'react';
import { Todo } from '../helpers/interfaces';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const length = todos.length;

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return { todos, addTodo, toggleTodo, length, clearCompletedTodos };
};

export default useTodos;
