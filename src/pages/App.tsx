import { useState } from 'react';
import { Cronometer } from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import app from './app.module.scss'
import { Task } from '../types/task';

function App() {
  let [tasks, setTasks] = useState<Task[]>([])
  return (
    <div className={app.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;
