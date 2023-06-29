import React from "react";
import Buton from '../Button'
import form from './form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={form.novaTarefa}>
                <div className={form.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label> <input type="text" name="task" id="task" placeholder="O que você quer estudar" required />
                </div>
                <div  className={form.inputContainer}>
                    <label htmlFor="time">Tempo</label> <input type="time" step="1" name="time" id="time" min="00:00:00" max="00:01:30" required />
                </div>
                <Buton />
            </form>
        )
    }
}

export default Form;
