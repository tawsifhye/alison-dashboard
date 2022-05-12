import { Card, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
const CourseContent = () => {
    return (
        <>
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
                zIndex: 100,
                background: '#fff',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}>

                <Box
                    sx={{
                        position: 'absolute',
                        left: '-40px',
                        background: '#00bcff',
                        color: '#fff',
                        height: '60%',
                        width: '50px',
                        fontSize: '22px',
                        cursor: 'pointer',
                        pointerEvents: 'all',
                        borderRadius: '100%',
                        overflow: 'hidden',
                        zIndex: '-20 !important',
                        display: 'flex',
                        alignItems: 'center'

                    }}
                >

                    <ArrowBackIosNewIcon />
                </Box>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
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
                        overflow: 'hidden',
                        zIndex: '-20 !important',

                    }}
                />
            </Box>

        </>
    );
};

export default CourseContent;