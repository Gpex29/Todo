import React from 'react';
import CompleteSVG from '../svg/Complete';
import CircleSVG from '../svg/Circle';
import { TodoListProps } from '../helpers/interfaces';
import classNames from 'classnames';

export const Main: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  if (todos.length === 0) {
    return null;
  }
  const liClass = 'flex text-wrap break-all gap-2 px-4 my-4 hover:cursor-pointer';
  return (
    <div>
      <ul className='border-b-2'>
        {todos
          .map((todo) => (
            <li
              className={classNames(liClass, {'line-through text-red-200': todo.completed})}
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? <CompleteSVG width='24px' height='24px' />: <CircleSVG width='24px' height='24px' />}
              {todo.text}
            </li>
          ))}
      </ul>
    </div>
  );
};
