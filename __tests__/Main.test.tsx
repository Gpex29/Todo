import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Main } from '../src/components/Main';
import '@testing-library/jest-dom';

describe('Main component', () => {
  const toggleTodoMock = jest.fn();
  
  it('renders todos correctly', () => {
    const todos = [
      { id: 1, text: 'First todo', completed: false },
      { id: 2, text: 'Second todo', completed: true },
    ];
    
    render(<Main todos={todos} toggleTodo={toggleTodoMock} />);
    
    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();
    
    const listItem = screen.getByText('First todo');
    fireEvent.click(listItem);
    
    expect(toggleTodoMock).toHaveBeenCalledWith(1);
  });

  it('does not render when there are no todos', () => {
    render(<Main todos={[]} toggleTodo={toggleTodoMock} />);
    
    expect(screen.queryByRole('list')).toBeNull();
  });
});
