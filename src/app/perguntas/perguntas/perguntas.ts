export interface Pergunta {
    id: number;
    descricao: string;
    respostas: Reposta[];
}


export interface Reposta {
    id: number;
    descricao: string;
    certa: string;
    perguntaId: number;
}