import { useState } from 'react';

// components
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// css
import styles from './App.module.css'

// interfaces
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h1>O que você vai fazer?</h1>
        <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div>
        <h2>Suas tarefas</h2>
        <TaskList taskList={taskList} />
      </div>
    </main>
  </div>
}

export default App;
