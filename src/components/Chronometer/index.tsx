import React from "react";
import MyButton from "../MyButton";
import Clock from "./Clock";
import style from './Chronometer.module.scss';

function Chronometer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock></Clock>
            </div>
            <MyButton>
                Começar
            </MyButton>
        </div>
    )
}

export default Chronometer;