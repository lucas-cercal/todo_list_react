
// interfaces
import { ITask } from '../../interfaces/Task'

// css
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task} data-cy='list-task'>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => { handleEdit(task) }} data-cy='icon-edit' />
              <i className='bi bi-trash' onClick={() => { handleDelete(task.id) }} data-cy='icon-delete' />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaskList
