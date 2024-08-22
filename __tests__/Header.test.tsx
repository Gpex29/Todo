import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../src/components/Header';

describe('Header component', () => {
  it('renders input field and submits a new todo', () => {
    const addTodoMock = jest.fn();
    render(<Header addTodo={addTodoMock} />);
    
    const input = screen.getByLabelText ('Write a task') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test todo' } });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    expect(addTodoMock).toHaveBeenCalledTimes(1);
    expect(addTodoMock).toHaveBeenCalledWith('Test todo');
    expect(input.value).toBe('');
  });

  it('does not call addTodo if input is empty', () => {
    const addTodoMock = jest.fn();
    render(<Header addTodo={addTodoMock} />);
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});
