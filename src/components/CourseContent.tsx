import { Card, CardContent, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { State } from 'redux/reducers';
import { Data } from 'interface/interface';
const CourseContent = () => {
    const { moduleId, moduleResourceIndex } = useSelector((state: State) => state.moduleInfo);
    const [moduleData, setModuleData] = useState<Data[]>([]);
    const [currentModule, setCurrentModule] = useState<Data>();
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data));
    }, [moduleId, moduleResourceIndex]);

    useEffect(() => {
        const filterModule = moduleData.find((data) => data.id === moduleId);
        setCurrentModule(filterModule);
        console.log(filterModule);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moduleData])
    return (
        <Box sx={{ backgroundColor: 'red', position: 'relative', }}>
            <Box sx={{
                minWidth: 275,
                maxWidth: 800,
                height: 600,
                mx: 'auto',
                mt: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                background: '#fff',
                zIndex: 100,
                // overflow: 'hidden',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                mb: 5
            }}>



                <ArrowBackIosNewIcon sx={{
                    position: 'absolute',
                    left: '-40px',
                    background: '#00bcff',
                    color: '#fff',
                    height: '60%',
                    zIndex: 10,
                    width: '50px',
                    fontSize: '22px',
                    cursor: 'pointer',
                    borderRadius: '100%',
                }} />

                <ReactPlayer
                    url={currentModule?.submenu[moduleResourceIndex].videoUrl}
                    controls={true}
                    width={700}
                    height={500}
                />
                <ArrowForwardIosIcon
                    sx={{
                        position: 'absolute',
                        right: '-40px',
                        background: '#00bcff',
                        color: '#fff',
                        height: '60%',
                        width: '50px',
                        fontSize: '22px',
                        cursor: 'pointer',
                        pointerEvents: 'all',
                        borderRadius: '100%',
                        overflow: 'hidden !important',

                    }}
                />
            </Box>

        </Box>
    );
};

export default CourseContent;