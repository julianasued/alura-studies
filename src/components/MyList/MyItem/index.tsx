import React from "react";
import style from '../MyList.module.scss';

function MyItem(props: { tarefa: string, tempo: string }) {
    const { tarefa, tempo } = props;
    return (
        <li className={style.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}

export default MyItem;