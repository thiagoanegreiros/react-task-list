import { Cronometer } from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import app from './app.module.scss'

function App() {
  return (
    <div className={app.AppStyle}>
      <Form />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;
