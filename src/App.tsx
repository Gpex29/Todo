import React, { useState } from 'react';
import useTodos from './hooks/useTodos';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { all, active, completed } from './helpers/constants';
import { Todo } from './helpers/interfaces';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, length, clearCompletedTodos } = useTodos();
  const [state, setState] = useState(all);
  const visibleTodos = (): Todo[] => {
    switch (state) {
      case all:
        return todos;
      case active:
        return todos.filter((todo) => !todo.completed);
      case completed:
        return todos.filter((todo) => todo.completed);
      default:
        return [];
    }
  }
  return (
    <div className='bg-rose-50 min-h-screen flex flex-col items-center'>
      <h1 className='text-6xl text-center text-red-200 mb-8'>todos</h1>
      <div className='bg-white w-screen md:w-1/2 flex flex-col justify-center border-2 rounded-lg'>
        <Header addTodo={addTodo} />
        <Main todos={visibleTodos()} toggleTodo={toggleTodo} />
        <Footer length={length} state={state} setState={setState} clearCompletedTodos={clearCompletedTodos} />
      </div>
    </div>
  );
};

export default App;
