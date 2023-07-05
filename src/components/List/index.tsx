import list from './list.module.scss'
import Item from './item'
import { Task } from '../../types/task';

type Props = {
    tasks: Task[],
    selectTask: (task: Task) => void 
}

function List({ tasks, selectTask }: Props ) {
    return(
        <aside className={list.listaTarefas} >
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item key={item.id} item={item} selectTask={selectTask} />
                ))}
            </ul>
        </aside>
    )
}

export default List;
