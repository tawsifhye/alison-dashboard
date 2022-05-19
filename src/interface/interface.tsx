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

export interface SubmittedAnswer {
    questionId: string;
    selectedAnswer: string;
    rightAnswer: string;
}


export interface SubMenu {
    type: string;
    title: string;
    videoUrl?: string;
    quizzes?: Quiz[]
}


export interface Data {
    id: string;
    title: string;
    submenu: SubMenu[];
}