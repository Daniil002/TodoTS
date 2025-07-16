import classNames from 'classnames';
import DeleteIcon from '../../assets/icons/delete.svg?react';
import EditIcon from '../../assets/icons/edit.svg?react';
import { CircularProgressBar } from '../CircularProgressBar/CircularProgressBar';
import style from './style.module.scss';

export const TaskCard = ({
  task: { id, title, priority, status, progress },
}) => {
  return (
    <div className={style['task-card']}>
      <div className={classNames(style['flex'], style['w-100'])}>
        <span className={style['task-title']}>Задача</span>
        <span className={style['task']}>{title}</span>
      </div>
      <div className={style['flex']}>
        <span className={style['priority-title']}>Приоритет</span>
        <span className={classNames(style[`priority--${priority}`], style['priority'])}>
          {priority}
        </span>
      </div>
      <div className={style['task-status-wrapper']}>
        <button className={classNames(style[`status--${status}`], style['status'])}>
          {status}
        </button>
      </div>
      <div className={style['progress']}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={style['actions']}>
        <EditIcon className={classNames(style['mr-20'], style['cp'])} onClick={() => {}} />
        <DeleteIcon className={style['cp']} onClick={() => {}} />
      </div>
    </div>
  );
};