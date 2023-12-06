export interface Pergunta {
    Id: number;
    Descricao: string;
    Respostas: Reposta[];
}


export interface Reposta {
    Id: number;
    Descricao: string;
    Certa: string;
    PerguntaId: number;
}