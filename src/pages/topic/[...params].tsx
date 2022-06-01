import CourseContent from 'components/CourseContent';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetQuiz } from 'redux/actions/quizAction';
import useSWR from 'swr';


const Slug = () => {
    const [currentModule, setCurrentModule] = useState<Data>();
    const router = useRouter();
    const { params } = router.query;
    const fetcher = (url: any): any => fetch(url).then(res => res.json())
    const { data, error } = useSWR<Data[]>('https://tawsifhye.github.io/data/alisonmodule.json', fetcher)
    const dispatch = useDispatch();

    const filterData = () => {
        if (params) {
            const moduleData = data?.find(data => data.id === params[1]);
            setCurrentModule(moduleData);
        }
    }



    useEffect(() => {

        filterData();
        dispatch(resetQuiz());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, params && params[2]])
    return (
        <>
            <CourseContent currentModule={currentModule} />
        </>
    );
};

export default Slug;

