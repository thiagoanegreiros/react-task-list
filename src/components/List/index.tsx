import list from './list.module.scss'
import Item from './item'
import { Task } from '../../types/task';

function List({ tasks }: { tasks: Task[] }) {
    return(
        <aside className={list.listaTarefas} >
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item index={index} item={item} />
                ))}
            </ul>
        </aside>
    )
}

export default List;
