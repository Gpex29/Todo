import { Dispatch, SetStateAction } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export interface TodoInputProps {
  addTodo: (text: string) => void;
}

export interface TodoFooterProps {
  length: number;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  clearCompletedTodos: () => void;
}

export interface Props {
  width: string,
  height: string
}