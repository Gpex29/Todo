import React from 'react';
import { TodoFooterProps } from '../helpers/interfaces';
import { active, all, completed } from '../helpers/constants';
import classNames from 'classnames';

export const Footer: React.FC<TodoFooterProps> = ({length, state, setState, clearCompletedTodos}) => {
  const btnClass = 'border border-red-200 p-1 rounded';
  return (
    <div className='flex justify-between p-4 items-baseline'>
      <span>{length} items left!</span>
      <div className='space-x-3'>
        <button className={classNames({[btnClass]: state === all})} onClick={() => setState(all)}>All</button>
        <button className={classNames({[btnClass]: state === active})} onClick={() => setState(active)}>Active</button>
        <button className={classNames({[btnClass]: state === completed})}  onClick={() => setState(completed)}>Completed</button>
      </div>
      <button onClick={() => clearCompletedTodos()}>Clear completed</button>
    </div>
  );
};
