import React from 'react';
import CompletedSVG from '../svg/Completed';
import CircleSVG from '../svg/Circle';
import { TodoListProps } from '../helpers/interfaces';
import classNames from 'classnames';

export const Main: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  if (todos.length === 0) {
    return null;
  }
  const liClass =
    'flex break-words overflow-clip text-ellipsis gap-2 m-4 hover:cursor-pointer';
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            className={classNames(liClass, {
              'line-through text-red-200': todo.completed,
            })}
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
          >
            <div>
              {todo.completed ? (
                <CompletedSVG width='24px' height='24px' />
              ) : (
                <CircleSVG width='24px' height='24px' />
              )}
            </div>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
