import React from "react";
import MyItem from "./MyItem";
import style from './MyList.module.scss';

function MyList() {
    const tasks =
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00'
        }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((item, index) => (
                    <MyItem
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    ></MyItem>
                ))}
            </ul>
        </aside>
    )
}

export default MyList; 