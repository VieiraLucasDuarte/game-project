export interface Pergunta {
    id: number;
    texto: string;
    respostas: Reposta[];
}


export interface Reposta {
    id: number;
    texto: string;
    certo: boolean;
    pergunta: number;
}