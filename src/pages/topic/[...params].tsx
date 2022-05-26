import CourseContent from 'components/CourseContent';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';


const Slug = () => {
    const [currentModule, setCurrentModule] = useState<Data>();
    const router = useRouter();
    const { params } = router.query;
    const fetcher = (url: any): any => fetch(url).then(res => res.json())
    const { data, error } = useSWR<Data[]>('/fakeData.json', fetcher)

    const filterData = () => {
        if (params) {
            const moduleData = data?.find(data => data.id === params[1]);
            setCurrentModule(moduleData);
        }
    }



    useEffect(() => {

        filterData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params && params[2]])
    return (
        <>
            <CourseContent currentModule={currentModule} />
        </>
    );
};

export default Slug;

