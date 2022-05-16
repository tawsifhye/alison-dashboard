import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QuizProps } from 'pages/quiz';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch } from 'react-redux';
import { submitAnswer } from 'redux/actions/quizAction';
import { useRouter } from 'next/router';
const Styles = {
    button: {
        backgroundColor: '#547B9B',
        display: 'block',
        border: '2px solid transparent',
        boxShadow: 'none',
        padding: '10px 30px',
        transition: '.5s',
        '&: hover': {
            background: 'transparent',
            color: '#2d2d2d',
            border: '2px solid #2d2d2d',
            boxShadow: 'none !important',
        }

    },
    icon: {
        color: '#fff',
        borderRadius: '50%',
        fontSize: '30px',
        position: 'absolute',
        right: '-17px',
        top: '50%',
        transform: 'translateY(-50%)'
    }
}

const QuizIndex = (props: QuizProps) => {
    const { quizzes } = props;
    const [index, setIndex] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const selectQuizOption = (id: string) => {
        setSelectedId(id);
    }
    const submitQuiz = (id: string, rightAnswer: string) => {
        if (!selectedId) {
            return;
        }
        setIsSubmitted(true);
        const answer = {
            questionId: id,
            selectedAnswer: selectedId,
            rightAnswer,
        }
        dispatch(submitAnswer(answer));

    }
    const goNext = () => {
        if (!isSubmitted)
            return;
        setSelectedId('');
        setIsSubmitted(false);
        setIndex(index + 1);
    }
    const showQuizResult = () => {
        if (isSubmitted)
            router.push('/quiz/result');
    }
    return (
        <Box sx={{
            minWidth: 275,
            maxWidth: 800,
            height: 600,
            mx: 'auto',
            mt: 15,
            fontWeight: 400,
            position: 'relative',
            background: '#fff',
            zIndex: 100,
            // overflow: 'hidden',
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
                margin: '0 auto'
            }}>

                <Typography variant="h3" sx={{
                    color: '#3f4a52 !important',
                    lineHeight: '26px',
                    textAlign: 'left',
                    fontWeight: 400,
                    my: 3
                }}>
                    {index + 1}/
                    {quizzes[index]?.question}
                </Typography>
                <Box sx={{
                    background: 'rgba(84,123,155,.45)',
                    borderRadius: '30px',
                    border: 'none',
                    maxWidth: '700px',
                    margin: '0 auto 25px',
                    padding: '20px 20px 10px',
                    position: 'relative',
                    zIndex: 2
                }}>

                    {
                        quizzes[index].options.map((option) => (
                            <Box
                                key={option.id}
                                sx={{
                                    background: 'rgba(0,0,0,.4)',
                                    border: selectedId === option.id ? '2px solid white' : '2px solid transparent',
                                    marginBottom: '20px',
                                    color: ' #fff',
                                    position: 'relative',
                                    fontSize: '18px',
                                    p: 2,
                                    cursor: 'pointer'
                                }}
                                onClick={() => selectQuizOption(option.id)}
                            >
                                {
                                    isSubmitted ?
                                        <>
                                            {option.isCorrect
                                                ?
                                                <>
                                                    <DoneIcon sx={{
                                                        ...Styles.icon,
                                                        background: '#149D4D',
                                                    }} />
                                                    {option.option}
                                                </>
                                                :
                                                <>
                                                    <CloseIcon sx={{
                                                        ...Styles.icon,
                                                        background: '#C0141F',
                                                    }}
                                                    />
                                                    {option.option}
                                                </>}

                                        </>
                                        :
                                        <>
                                            {option.option}
                                        </>
                                }


                            </Box>

                        ))
                    }
                </Box>

                {isSubmitted ? <Box
                    sx={{
                        backgroundColor: '#5F5F5F',
                        color: 'white',
                        position: 'relative',
                        textAlign: 'center',
                        fontSize: '18px',
                        padding: '15px',
                        borderRadius: '4px'
                    }}
                >
                    {
                        selectedId === quizzes[index]?.right_answer ?
                            <>
                                <DoneIcon sx={{
                                    ...Styles.icon,
                                    left: '10px',
                                    background: '#149D4D',
                                }} />

                                The answer is correct
                            </>
                            :
                            <>
                                <>
                                    <CloseIcon sx={{
                                        ...Styles.icon,
                                        left: '10px',
                                        background: '#C0141F',
                                    }} />

                                    The answer is incorrect
                                </>
                            </>
                    }
                </Box>
                    :
                    <Button variant='contained'
                        disableRipple
                        sx={{ ...Styles.button, margin: '0 auto' }}
                        onClick={() => submitQuiz(quizzes[index].id, quizzes[index].right_answer)}
                    >
                        Submit Answer
                    </Button>
                }
                <Button variant='contained' sx={{
                    ...Styles.button,
                    marginLeft: 'auto',
                    marginTop: '30px'
                }}
                    disableRipple
                    onClick={index == quizzes.length - 1 ? showQuizResult : goNext}
                >
                    {
                        index == quizzes.length - 1 ?
                            'Finish'
                            :
                            'Next'
                    }
                </Button>
            </Box>
        </Box >
    );
};

export default QuizIndex;