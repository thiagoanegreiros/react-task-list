import Button from "../Button";
import Clock from "./Clock";
import style from './cronometer.module.scss'

export function Cronometer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
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
