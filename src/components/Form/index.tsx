import React from "react";
import Buton from '../Button'
import form from './form.module.scss'
import { Task } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}> {
    state = {
        task: '',
        time: '00:00:00'
    } as Task
    initState() {
        this.setState({
            task: '',
            time: '00:00:00'
        })
    }
    addTask(e: React.FormEvent) {
        e.preventDefault();
        this.props.setTasks((tasks) => ([
            ...tasks,
            {
                ...this.state,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ]))
        this.initState()
    }
    render() {
        return (
            <form className={form.novaTarefa} onSubmit={this.addTask.bind(this  )}>
                <div className={form.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input onChange={e => this.setState({
                        ...this.state,
                        task: e.target.value
                    })} value={this.state.task} type="text" name="task" id="task" placeholder="O que você quer estudar" required />
                </div>
                <div  className={form.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input onChange={e => this.setState({
                        ...this.state,
                        time: e.target.value
                    })} value={this.state.time} type="time" step="1" name="time" id="time" min="00:00:00" max="00:01:30" required />
                </div>
                <Buton type="submit">Adicionar</Buton>
            </form>
        )
    }
}

export default Form;
