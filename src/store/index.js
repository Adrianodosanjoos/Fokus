import { create } from "zustand";
export const MODO_CRONOMETRO = {
    FOCO: {
        id:"foco",
        nome:"foco",
        frase:["Otimize sua produtividadde!,", "Mergulhe no foco e alcance seus objetivos!"],
        tempoInicialEmSegundos: 30,
    },
    DESCANSO_CURTO: {
        id: "desanso_curto",
        nome: "Decanso Curto",
        frase: ["Pausa rápida, mente renovada!", "Descanse um pouco e volte com tudo!"] ,
        tempoInicialEmSegundos: 5,
    },

    
    DESCANSO_Longo: {
        id: "desanso_longo",
        nome: "Decanso Longo",
        frase: ["Hora de voltar à superficie .", "Faça uma pausa mais Longa"] ,
        tempoInicialEmSegundos: 15,
    },

};

export const useCronometroStore = create((set) => ({
    MODO_CRONOMETRO: MODO_CRONOMETRO.FOCO,
    tempoEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,

    setModoCronometro: (novoModo) => {
    set({
        modoCronometro: novoModo,
        tempoEmSegundos: novoModo.tempoInicialEmSegundos,
    })
    },
}));