export interface Option {
    id: string;
    option: string;
    isCorrect: boolean
}

export interface Quiz {
    id: string,
    question: string,
    options: Option[],
    right_answer: string,
    level: string
}
