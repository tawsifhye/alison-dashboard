import { Data, SubMenu } from 'interface/interface';
import React from 'react';


interface Props {
    quiz: SubMenu;
}
interface ModuleTitle {
    title: string;
}
interface Params {
    params: ModuleTitle;
}


const ModuleTitle = () => {
    return (
        <div>

        </div>
    );
};

export default ModuleTitle;



export async function getStaticPaths() {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data = await res.json();

    const paths = modules?.submenu?.map((lesson: SubMenu) => ({
        params: { title: lesson.title }
    })
    );
    return { paths, fallback: false };
}

export async function getStaticProps({ params }: Params) {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data = await res.json();

    const lessonData = modules.submenu.map(lesson => lesson.title === params.title);
    console.log(lessonData)
    return { props: { lessonData }, revalidate: 10 };
}   