import { Box } from '@mui/system';
import QuizIndex from 'components/QuizIndex';
import Review from 'components/Review';
import { Data, SubMenu } from 'interface/interface';
import React, { useState } from 'react';


import ResultPage from '../../components/ResultPage';

interface Props {
    quiz: SubMenu;
}
interface ID {
    id: string;
}
interface Params {
    params: ID;
}


const ModuleQuiz = ({ quiz }: Props) => {

    const [showResult, setShowResult] = useState<boolean>(false);
    const [showReview, setShowReview] = useState<boolean>(false);


    return (
        <Box>

            {

                (showResult && !showReview) && <ResultPage setShowReview={setShowReview} setShowResult={setShowResult} />

            }
            {
                (!showResult && !showReview) && <QuizIndex quiz={quiz} setShowResult={setShowResult} />
            }


            {
                showReview && <Review quiz={quiz} setShowReview={setShowReview} setShowResult={setShowResult} />
            }
        </Box>
    );
};

export default ModuleQuiz;


export async function getStaticPaths() {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data[] = await res.json();
    const paths = modules.map(module => ({
        params: { id: module.id.toString() }
    })
    );
    return { paths, fallback: false };
}

export async function getStaticProps({ params }: Params) {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data[] = await res.json();
    const moduleData = modules.find(module => module.id.toString() === params.id);
    const quiz = moduleData?.submenu.find(data => data.type === 'quiz')
    return { props: { quiz }, revalidate: 10 };
}