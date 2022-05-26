import CourseContent from 'components/CourseContent';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Slug = () => {
    const [moduleData, setModuleData] = useState<Data[]>([]);
    const [currentModule, setCurrentModule] = useState<Data>();
    const [videoUrl, setVideoUrl] = useState<string>();
    const router = useRouter();
    const { params } = router.query;

    const fetchData = () => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data))
    }
    const filterData = () => {
        if (params) {
            const data = moduleData.find(data => data.id === params[1]);
            setCurrentModule(data);
        }
    }

    const setUrl = () => {
        if (params) {
            const lesson = currentModule?.submenu.find(data => data.slug === params[2]);
            setVideoUrl(lesson?.videoUrl);
        }
    }

    useEffect(() => {
        fetchData();
        filterData();
        setUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moduleData, currentModule])
    return (
        <>
            <CourseContent videoUrl={videoUrl} />
        </>
    );
};

export default Slug;

