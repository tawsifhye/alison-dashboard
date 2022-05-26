import CourseContent from 'components/CourseContent';
import { Data, SubMenu } from 'interface/interface';
import React from 'react';


interface Props {
    quiz: SubMenu;
}
interface Slug {
    slug: string;
}
interface Params {
    params: Slug;
}




const ModuleTitle = () => {
    return (
        <div>
            <CourseContent />
        </div>
    );
};

export default ModuleTitle;



export async function getStaticPaths() {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data[] = await res.json();
    let slugs: any = [];
    modules.forEach(module => {
        module.submenu.forEach(menu => {
            slugs.push(menu.slug)
        })
    })
    const paths = slugs.map((data: string) => ({
        params: { slug: data.toString() }
    }
    ))

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: Params) {
    const res = await fetch('https://tawsifhye.github.io/data/alisonmodule.json');
    const modules: Data = await res.json();

    // const lessonData = modules.submenu.map(lesson => lesson.slug === params.slug);
    // console.log(lessonData)
    return { props: {}, revalidate: 10 };
}   