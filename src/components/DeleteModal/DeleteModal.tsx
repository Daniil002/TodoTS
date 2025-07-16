import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';
import style from './style.module.scss';

export const DeleteModal = () => {
  return (
    <Modal>
      <div className={style["delete-modal"]}>
        <p>Точно удалить задачу?</p>
        <div className={style["delete-modal__actions"]}>
          <Button title="Удалить" onClick={() => {}} />
          <Button title="Выйти" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};
