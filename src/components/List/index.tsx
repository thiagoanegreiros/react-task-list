import list from './list.module.scss'

type ListItem = {
    task: string,
    time: number
}
function List() {
    const tasks: ListItem[] = [
        {
            task: 'React',
            time: 2
        },
        {
            task: 'JS',
            time: 1
        }
    ]
    return(
        <aside className={list.listaTarefas} >
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={list.item}>
                        <h3>{item.task}</h3>
                        <span>{`0${item.time}:00:00`}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;
