import list from './list.module.scss'
import Item from './item'
import { useState } from 'react'

export type ListItem = {
    task: string,
    time: number
}

function List() {
    let [tasks, setTasks] = useState([
        {
            task: 'React',
            time: 2
        },
        {
            task: 'JS',
            time: 1
        }
    ])
    return(
        <aside className={list.listaTarefas} >
            <h2 onClick={() => {
                console.log('h2 click')
                setTasks([...tasks, { task: 'Estudar estado', time: 3 }])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item index={index} item={item} />
                ))}
            </ul>
        </aside>
    )
}

export default List;
