import Form from '../components/Form';
import List from '../components/List';
import app from './app.module.scss'

function App() {
  return (
    <div className={app.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
