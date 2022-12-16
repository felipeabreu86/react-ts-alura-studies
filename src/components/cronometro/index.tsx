import Botao from "../botao";
import Relogio from './relogio';
import style from './cronometro.module.scss';
import { ITarefa } from "../../types/itarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void,
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            tempoParaSegundos(selecionado.tempo)
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao texto="Começar!" onClick={() => regressiva(tempo)} />
        </div>
    )
}