import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Data, FinishedModule, SubmittedAnswer } from 'interface/interface';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFinishedModules } from 'redux/actions/moduleAction';
import { State } from 'redux/reducers';
import { primaryButton } from 'styles/commonStyles';

interface Answer {
    submittedAnswer: SubmittedAnswer[]
}

interface Props {
    setShowReview: (showReview: boolean) => void;
    setShowResult: (showResult: boolean) => void;
}

const ResultPage = ({ setShowReview, setShowResult }: Props) => {

    const { submittedAnswer }: Answer = useSelector((state: State) => state.answers);
    const [percentage, setPercentage] = useState<number>(0);
    const [moduleIndex, setModuleIndex] = useState<number>(0);
    const [moduleData, setModuleData] = useState<Data[] | undefined>();
    const router = useRouter();

    const { id } = router.query;
    const dispatch = useDispatch();
    const { finishedModules }: any = useSelector((state: State) => state.moduleInfo);

    useEffect(() => {
        let rightPercentage = 0;
        submittedAnswer?.forEach((answer: SubmittedAnswer) => {
            if (answer.selectedAnswer === answer.rightAnswer) {
                rightPercentage += 10;
            }
            setPercentage(rightPercentage);
        })

        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data));


        const index = moduleData?.findIndex(object => {
            return object.id === id;

        });
        if (index) setModuleIndex(index);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const retakeQuiz = () => {
        window.location.reload();
    }

    const finishQuiz = () => {
        const filterFinsihedModule = finishedModules.find((module: FinishedModule) => module.moduleId === id);
        const currentModule = moduleData?.find(data => data.id === id);
        const index = currentModule?.submenu.findIndex(item => item.type === 'quiz')
        if (!filterFinsihedModule && index) {
            const newFinishedModule: any = {
                moduleId: currentModule?.id,
                completedLessonId: [currentModule?.submenu![index].id]
            }
            const newArr = [...finishedModules, newFinishedModule]
            dispatch(getFinishedModules(newArr))
        }
        else {
            const lessonIndex = finishedModules.findIndex((module: FinishedModule) => module.moduleId === filterFinsihedModule.moduleId)
            if (index) {
                const newLessonsId = [...finishedModules[lessonIndex].completedLessonId, currentModule?.submenu[index].id]
                finishedModules[lessonIndex].completedLessonId = newLessonsId;
                dispatch(getFinishedModules(finishedModules));
            }
        }
        if (moduleData) {
            if (moduleIndex === moduleData?.length - 1) {
                router.push(`/topic/module/${moduleData[moduleIndex].id}/${moduleData[moduleIndex].submenu[0].slug}`);
            }
            else {
                router.push(`/topic/module/${parseInt(moduleData[moduleIndex].id) + 1}/${moduleData[moduleIndex + 1].submenu[0].slug}`);
            }
        }
    }

    const reviewQuiz = () => {
        setShowResult(false);
        setShowReview(true);
    }


    return (
        <>

            <Box sx={{
                minWidth: 275,
                maxWidth: 800,
                mx: 'auto',
                mt: 15,
                fontWeight: 400,
                position: 'relative',
                background: '#fff',
                zIndex: 100,
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                mb: 5
            }}>
                <Box sx={{
                    background: 'url(https://cdn01.alison-static.net/publishing/dist/img/bg.png) no-repeat #f4f4f4 ',
                    backgroundSize: 'contain',
                    backgroundPositionY: '70px',
                    padding: '20px',
                    width: '90%',
                    height: '100%',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <Typography sx={{
                        color: '#3f4a52',
                        fontSize: '30px',
                        mb: 5
                    }}>
                        {percentage < 80 ? ' Sorry! You Failed' :
                            <Box component='span'>
                                Congratulations
                                <Box component='span' sx={{ fontWeight: 'bold' }}>
                                    You Passed.
                                </Box>
                            </Box>}
                    </Typography>
                    <Box sx={{
                        backgroundColor: '#42617A',
                        color: '#fff',
                        width: '80%',
                        fontSize: '20px',
                        margin: '0 auto',
                        padding: '20px',
                        position: 'relative',
                        borderRadius: '10px 10px 0 0'
                    }}>
                        {
                            percentage < 80 ? ' You can always try the assessment again.'
                                :
                                'Well done on passing your Assessment'
                        }

                        <Box component='span' className='success-failure-icon'>
                            <Image src={percentage < 80 ? '/assets/images/failed.png' : '/assets/images/success.png'} alt='' width='50px' height='50px' />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        mt: 5
                    }}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            border: '5px solid #B2C1CE',
                            overflow: 'hidden',
                            transform: 'rotate(180deg)',
                            position: 'relative',
                            zIndex: 1,
                        }}>
                            <Box sx={{
                                backgroundColor: '#B2C1CE',
                                height: `${percentage}%`,
                                zIndex: 10,
                                bottom: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '23%',
                                    transform: 'translateY(-50%)'
                                }}>

                                    <Typography
                                        sx={{
                                            transform: 'rotate(180deg)',
                                            color: '#485D6F',
                                            fontSize: '18px'
                                        }}

                                    >
                                        Your Score
                                    </Typography>
                                    <Typography
                                        sx={{
                                            transform: 'rotate(180deg)',
                                        }}
                                        variant='h2'
                                        fontWeight={500}
                                    >
                                        {percentage}%
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>

                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            border: '5px solid #B2C1CE',
                            overflow: 'hidden',
                            transform: 'rotate(180deg)',
                            zIndex: 1,
                        }}>
                            <Box sx={{
                                backgroundColor: '#B2C1CE',
                                height: '80%',
                                zIndex: 10,
                                bottom: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '23%',
                                    transform: 'translateY(-50%)'
                                }}>
                                    <Typography
                                        sx={{
                                            transform: 'rotate(180deg)',
                                            color: '#485D6F',
                                            fontSize: '18px'
                                        }}

                                    >
                                        Passing Score
                                    </Typography>
                                    <Typography
                                        sx={{
                                            transform: 'rotate(180deg)',
                                        }}
                                        variant='h2'
                                        fontWeight={500}
                                    >
                                        80%
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '50px',
                        margin: '30px auto'
                    }} >
                        <Button sx={{ ...primaryButton }}
                            variant='contained'
                            disableRipple
                            onClick={percentage < 80 ? retakeQuiz : finishQuiz}>
                            {percentage < 80 ? 'Retry' : 'Finish'}
                        </Button>

                        <Button sx={{ ...primaryButton }}
                            variant='contained'
                            disableRipple
                            onClick={reviewQuiz}
                        >
                            Review
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ResultPage;