import { useState } from 'react';
import { Cronometer } from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import app from './app.module.scss'
import { Task } from '../types/task';

function App() {
  let [tasks, setTasks] = useState<Task[]>([])
  const [selected, setSelected] = useState<Task>();
  function selectTask(selectedTask: Task) {
    setSelected(selectedTask)
    setTasks((last) => last.map((i) => ({
      ...i,
      selected: i.id === selectedTask.id
    })))
  }
  return (
    <div className={app.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer selected={selected} />
    </div>
  );
}

export default App;
