import { useState } from 'react'

// components
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// css
import styles from './App.module.css'
import Modal from './components/Modal'

// interfaces
import { ITask } from './interfaces/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal")
    if (display) modal!.style.display = 'block'
    else modal!.style.display = 'none'
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  return <div>
    <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate}/>} />
    <Header />
    <main className={styles.main}>
      <div>
        <h1>O que você vai fazer?</h1>
        <TaskForm
          btnText='Criar tarefa'
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
      <div>
        <h2>Suas tarefas</h2>
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </div>
    </main>
  </div>
}

export default App
