import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from '../src/components/Footer';
import { all, active, completed } from '../src/helpers/constants';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  const setStateMock = jest.fn();
  const clearCompletedTodosMock = jest.fn();
  
  it('renders the item count and buttons', () => {
    render(
      <Footer 
        length={3} 
        state={all} 
        setState={setStateMock} 
        clearCompletedTodos={clearCompletedTodosMock} 
      />
    );
    
    expect(screen.getByText('3 items left!')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('All'));
    fireEvent.click(screen.getByText('Active'));
    fireEvent.click(screen.getByText('Completed'));
    
    expect(setStateMock).toHaveBeenCalledTimes(3);
    expect(setStateMock).toHaveBeenCalledWith(all);
    expect(setStateMock).toHaveBeenCalledWith(active);
    expect(setStateMock).toHaveBeenCalledWith(completed);
    
    fireEvent.click(screen.getByText('Clear completed'));
    expect(clearCompletedTodosMock).toHaveBeenCalled();
  });
});
