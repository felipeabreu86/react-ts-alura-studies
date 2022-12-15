import React, { useState } from 'react'
import Item from './item';
import style from './lista.module.scss';

function Lista() {

    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: 'Estudar Estado', tempo: '05:00:00' }])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;