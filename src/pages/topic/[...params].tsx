import CourseContent from 'components/CourseContent';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';

interface Fetch {
    data: SWRResponse<any, any>;
    error: any;
}

const Slug = () => {
    const [currentModule, setCurrentModule] = useState<Data>();
    const [videoUrl, setVideoUrl] = useState<string>();
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

    const setUrl = () => {
        if (params) {
            const lesson = currentModule?.submenu.find(data => data.slug === params[2]);
            setVideoUrl(lesson?.videoUrl);
        }
    }

    useEffect(() => {

        filterData();
        setUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params && params[2], currentModule, videoUrl])
    return (
        <>
            <CourseContent videoUrl={videoUrl} />
        </>
    );
};

export default Slug;

