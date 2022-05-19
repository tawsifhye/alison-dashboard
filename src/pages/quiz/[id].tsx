import { Box } from '@mui/system';
import QuizIndex from 'components/QuizIndex';
import { Data, Quiz, SubMenu } from 'interface/interface';
import React from 'react';

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
    return (
        <Box>
            <QuizIndex quiz={quiz} />
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