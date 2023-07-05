import { Task } from '../../../types/task'
import list from './item.module.scss'

type Props = {
    item: Task
    selectTask: (task: Task) => void
}

export default function Item( { item, selectTask }: Props) {
    return (
        <li
            onClick={() => selectTask(item)}
            key={item.id}
            className={`${list.item} ${item.selected ? list.itemSelecionado: ''}`}
        >
        <h3>{item.task}</h3>
        <span>{`${item.time}`}</span>
    </li>
    )
}
