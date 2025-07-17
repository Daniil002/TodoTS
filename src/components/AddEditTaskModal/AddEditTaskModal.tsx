import classNames from 'classnames';
import Close from '../../assets/icons/close.svg?react';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input/Input';
import { Modal } from '../../ui/Modal/Modal';
import style from './style.module.scss';

export const AddEditTaskModal = ({ onClose, taskTitle, taskTitleHandler, onAddTask }) => {
  return (
    <Modal>
      <form>
        <div className={style["add-edit-modal"]}>
          <div className="flx-between">
            <span className={style["modal-title"]}>Добавить задачу</span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={taskTitleHandler}
            name="title"
            value={taskTitle}
          />
          <div className={style["modal-priority"]}>
            <span>Приортитет</span>
            <ul className={style["priority-buttons"]}>
              {['high', 'medium', 'low'].map((priority) => (
                <li
                  key={priority}
                  className={classNames(style[`${priority}-selected`], style[priority])}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className={classNames("flx-right", "mt-50")}>
            <Button title="Добавить" onClick={() => {onAddTask(taskTitle); onClose();}} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
