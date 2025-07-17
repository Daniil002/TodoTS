import style from './style.module.scss';
import Add from '../../assets/icons/add.svg?react';
import { AddEditTaskModal } from '../AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../ui/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { Task, taskList } from '../../serverData/taskList';
import { useState } from 'react';
import { Prioroty, Status } from '../../types';

export const TodoList = () => {

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(taskList)
  const [taskTitle, setTaskTitle] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null);
  console.log(tasks)

  const showAddModal = () => {
    console.log('Open modal')
    setShowAddEditModal(true)
  }

  const showDelete = (id) => {
    console.log('delete modal')
    setDeleteId(id)
    setShowDeleteModal(true)
  }

  const closeModal = () => {
    setShowAddEditModal(false)
    setShowDeleteModal(false)
    setDeleteId(null)
  }

  const taskTitleHandler = (e) => {
    setTaskTitle(e.target.value)
  }

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      priority: Prioroty.MEDIUM,
      status: Status.TODO,
      progress: 0,
    };
    setTasks([newTask, ...tasks]);
    setTaskTitle('');
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={showAddModal} />
        </div>
        <div className={style["task-container"]}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDeleteTask={deleteTask} onShowDelete={showDelete} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal onClose={closeModal} taskTitle={taskTitle} taskTitleHandler={taskTitleHandler} onAddTask={addTask} />}
      {showDeleteModal && <DeleteModal onClose={closeModal} onDeleteTask={deleteTask} deleteId={deleteId} />}
    </>
  );
};
