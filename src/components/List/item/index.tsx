import { Task } from '../../../types/task'
import list from '../list.module.scss'

export default function Item( { index, item }: { index: number, item: Task }) {
    return (
        <li key={index} className={list.item}>
        <h3>{item.task}</h3>
        <span>{`${item.time}`}</span>
    </li>
    )
}
