import list from '../list.module.scss'
import { ListItem } from '../'

export default function Item( { index, item }: { index: number, item: ListItem }) {
    return (
        <li key={index} className={list.item}>
        <h3>{item.task}</h3>
        <span>{`0${item.time}:00:00`}</span>
    </li>
    )
}
