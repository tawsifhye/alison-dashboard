import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
import { Data } from 'interface/interface';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';



const Styles = {
    nextPrevButton: {
        borderRadius: '8px',
        textAlign: 'center',
        background: '#374651',
        boxShadow: '0 3px 8px 0 rgb(50 50 50 / 20%)',
    },
    nextPrevArrow: {
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
    }
}

interface Params {
    currentModule?: Data;
}

const CourseContent = ({ currentModule }: Params) => {
    const [index, setIndex] = useState<number>(0);
    const [videoUrl, setVideoUrl] = useState<string>();
    const router = useRouter()
    const { params } = router.query;
    const dispatch = useDispatch();

    const goNextPrevious = (type: string) => {
        if (type === 'previous') {
            router.push(`/topic/module/${currentModule?.id}/${currentModule?.submenu[index - 1].slug}`)
            return;
        }
        if (currentModule?.submenu[index + 1].type === 'video') {
            setIndex(index + 1);
            router.push(`/topic/module/${currentModule.id}/${currentModule.submenu[index + 1].slug}`)

        }
        else if (currentModule?.submenu[index + 1].type === 'quiz') {
            router.push(`/quiz/${currentModule.id}`);
        }

    }


    useEffect(() => {
        if (params) {
            const lesson = currentModule?.submenu.find(lesson => lesson.slug === params[2]);
            if (lesson) setVideoUrl(lesson?.videoUrl);
            const index = currentModule?.submenu.findIndex(object => {
                return object.slug === params[2];
            });
            if (typeof (index) === 'number') {
                setIndex(index);
            }
        }
        // dispatch(fetchApiData())
    }, [currentModule, params])

    return (
        <Box sx={{ backgroundColor: '', position: 'relative', }}>
            <Box sx={{
                padding: '20px 30px',
                maxWidth: 800,
                height: 500,
                mx: 'auto',
                mt: 15,
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



                {index ? <ArrowBackIosNewIcon sx={{ ...Styles.nextPrevArrow, left: '-40px' }}
                    onClick={() => goNextPrevious('previous')}
                />
                    : <></>
                }
                {
                    videoUrl ?
                        <ReactPlayer
                            url={videoUrl}
                            controls={true}
                            width='100%'
                            height='90%'
                        />
                        :
                        <CircularProgress />
                }
                <Box sx={{ mt: 2, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                    <Button variant='contained'
                        disableRipple
                        startIcon={<ArrowBackIosNewIcon />}
                        sx={Styles.nextPrevButton}
                        disabled={index === 0}
                        onClick={() => goNextPrevious('previous')}
                    >
                        Previous
                    </Button>
                    <Button variant='contained'
                        disableRipple
                        endIcon={<ArrowForwardIosIcon />}
                        sx={Styles.nextPrevButton}
                        onClick={() => goNextPrevious('next')}
                    >
                        Next
                    </Button>
                </Box>
                <ArrowForwardIosIcon
                    sx={{ ...Styles.nextPrevArrow, right: '-40px' }}
                    onClick={() => goNextPrevious('next')}
                />
            </Box>
        </Box>
    );
};

export default CourseContent;