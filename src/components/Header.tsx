import React, { useState } from 'react';
import { TodoInputProps } from '../helpers/interfaces';

export const Header: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form
      className='border-b-2 p-4 space-x-40 sticky top-0 bg-white'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='What needs to be done?'
        className='w-full p-2 border-2 rounded-lg outline-none focus:text-red-300 focus:border-red-100 placeholder:focus:text-red-200'
      />
    </form>
  );
};
