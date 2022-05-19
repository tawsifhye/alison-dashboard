import QuizIndex from 'components/QuizIndex';
import { Quiz } from 'interface/interface';
import React from 'react';

export interface QuizProps {
    quizzes: Quiz[]
}


const QuizHome = (props: QuizProps) => {
    return (
        <>
            {/* <QuizIndex quizzes={props.quizzes} /> */}
        </>
    );
};

export default QuizHome;


export async function getStaticProps() {
    const res = await fetch('https://tawsifhye.github.io/data/coursecloudquiz.json')

    const quizzes = await res.json()

    return {
        props: {
            quizzes: quizzes.slice(10)
        },
        revalidate: 10,
    }
}