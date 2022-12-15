import React from 'react'
import { ITarefa } from '../../types/itarefa';
import Botao from '../botao';
import style from './formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

const tarefaPadrao = "";
const tempoPadrao = "00:00:00"

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: tarefaPadrao,
        tempo: tempoPadrao,
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]);

        this.setState({
            tarefa: tarefaPadrao,
            tempo: tempoPadrao,
        });
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={(evento) => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder='O que você quer estudar'
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name='tempo'
                        id='tempo'
                        value={this.state.tempo}
                        onChange={(evento) => this.setState({ ...this.state, tempo: evento.target.value })}
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Botao texto='Adicionar' type='submit' />
            </form>
        )
    }
}

export default Formulario;