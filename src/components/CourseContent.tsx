import { Button, Card, CardContent, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { State } from 'redux/reducers';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';

const Styles = {
    nextPrevButton: {
        borderRadius: '8px',
        textAlign: 'center',
        background: '#00bcff',
        boxShadow: '0 3px 8px 0 rgb(50 50 50 / 20%)',
    }
}

interface Params {
    currentModule?: Data;
}

const CourseContent = ({ currentModule }: Params) => {
    const [videoUrl, setVideoUrl] = useState<string>();
    const router = useRouter()
    const { params } = router.query;

    useEffect(() => {
        if (params) {
            const lesson = currentModule?.submenu.find(lesson => lesson.slug === params[2]);
            setVideoUrl(lesson?.videoUrl);
        }
    }, [currentModule, params])

    return (
        <Box sx={{ backgroundColor: '', position: 'relative', }}>
            <Box sx={{
                padding: '30px',
                maxWidth: 800,
                height: 500,
                mx: 'auto',
                mt: 5,
                display: {
                    md: 'flex'
                },
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                background: '#fff',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                mb: 5
            }}>



                <ArrowBackIosNewIcon sx={{
                    position: 'absolute',
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                    left: '-40px',
                    background: '#374651',
                    color: '#fff',
                    height: '30px',
                    width: '30px',
                    fontSize: '22px',
                    cursor: 'pointer',
                    borderRadius: '100%',
                }} />

                <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    width='100%'
                    height='90%'
                />
                <Box sx={{ mt: 3, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                    <Button variant='contained'
                        disableRipple
                        startIcon={<ArrowBackIosNewIcon />}
                        sx={Styles.nextPrevButton}>
                        Previous
                    </Button>
                    <Button variant='contained'
                        disableRipple
                        endIcon={<ArrowForwardIosIcon />}
                        sx={Styles.nextPrevButton}>
                        Next
                    </Button>
                </Box>
                <ArrowForwardIosIcon
                    sx={{
                        position: 'absolute',
                        display: {
                            xs: 'none',
                            md: 'block',
                        },
                        right: '-40px',
                        background: '#374651',
                        color: '#fff',
                        height: '30px',
                        width: '30px',
                        cursor: 'pointer',
                        pointerEvents: 'all',
                        borderRadius: '100%',
                        zIndex: 1

                    }}
                />
            </Box>
        </Box>
    );
};

export default CourseContent;