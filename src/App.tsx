// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// css
import styles from './App.module.css'

// interfaces
import { ITask } from './interfaces/Task';

function App() {
  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</h1>
        <TaskForm btnText='Criar tarefa'/>
      </div>
      <div>
        <h2>Suas tarefas</h2>
        <TaskList />
      </div>
    </main>
    <Footer />
  </div>
}

export default App;
