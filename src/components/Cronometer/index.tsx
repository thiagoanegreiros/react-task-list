import { useEffect, useState } from "react";
import { Task } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './cronometer.module.scss'
import { timeToSeconds } from "../../common/utils/time";

type Props = {
    selected: Task | undefined
}

export function Cronometer({ selected } : Props) {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
        console.info(selected)
    }, [selected])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
            Tempo: {time}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <div>
                <Button>
                    Começar!
                </Button>
            </div>
        </div>
    )
}
