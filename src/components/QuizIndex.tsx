import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Quiz, Option, SubMenu } from "interface/interface";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { resetQuiz, showResult, submitAnswer } from "redux/actions/quizAction";
import { useRouter } from "next/router";
import { primaryButton } from "styles/commonStyles";
import Image from "next/image";
const Styles = {
  icon: {
    color: "#fff",
    borderRadius: "50%",
    fontSize: "30px",
    position: "absolute",
    right: "-17px",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

interface Quizzes {
  quizzes: Quiz[];
}
interface Props {
  quiz: SubMenu;
  setShowResult: (showResult: boolean) => void;
}

const QuizIndex = ({ quiz, setShowResult }: Props) => {
  const { quizzes }: any = quiz;
  const [index, setIndex] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIndex(0);
    setSelectedId("");
    dispatch(resetQuiz());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const selectQuizOption = (id: string) => {
    setSelectedId(id);
  };

  const submitQuiz = (id: string, rightAnswer: string) => {
    if (!selectedId) {
      return;
    }
    setIsSubmitted(true);
    const answer = {
      moduleId: router.query.id,
      questionId: id,
      selectedAnswer: selectedId,
      rightAnswer,
    };
    dispatch(submitAnswer(answer));
  };

  const goNext = () => {
    if (!isSubmitted) return;
    setSelectedId("");
    setIsSubmitted(false);
    setIndex(index + 1);
  };

  const showQuizResult = () => {
    if (isSubmitted) {
      setShowResult(true);
    }
  };

  return (
    <>
      <Typography
        sx={{
          marginTop: "100px",
          fontSize: "20px",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {index < 3 &&
          "You must pass all Assessments in this course to get your official Certification. Let’s go!"}
        {index <= 4 &&
          index > 2 &&
          "You’ve done over 25% of the Assessment! Well Done!"}

        {index > 4 && "You’re halfway there, keep going!"}
      </Typography>
      <Box
        sx={{
          minWidth: 275,
          maxWidth: 800,
          height: 600,
          mx: "auto",
          fontWeight: 400,
          position: "relative",
          background: "#fff",
          zIndex: 100,
          marginTop: 5,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          mb: 5,
        }}
      >
        <Box
          sx={{
            background:
              "url(https://cdn01.alison-static.net/publishing/dist/img/bg.png) no-repeat #f4f4f4 ",
            backgroundSize: "contain",
            backgroundPositionY: "70px",
            padding: "20px",
            width: "90%",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#3f4a52",
              lineHeight: "26px",
              textAlign: "left",
              fontWeight: 400,
              my: 3,
            }}
          >
            {index + 1}/{quizzes[index]?.question}
          </Typography>
          <Box
            sx={{
              background: "rgba(84,123,155,.45)",
              borderRadius: "30px",
              border: "none",
              maxWidth: "700px",
              margin: "25px auto ",
              padding: "20px 20px 10px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Tooltip title="Choose one answer.">
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  top: -20,
                  right: 0,
                }}
              >
                <Image
                  src="/assets/images/questionMark.png"
                  alt=""
                  height="35px"
                  width="35px"
                />
              </Box>
            </Tooltip>
            {quizzes[index]?.options.map((option: Option) => (
              <Box
                key={option.id}
                sx={{
                  background: "rgba(0,0,0,.4)",
                  border:
                    selectedId === option.id
                      ? "2px solid white"
                      : "2px solid transparent",
                  marginBottom: "20px",
                  color: " #fff",
                  position: "relative",
                  fontSize: "18px",
                  p: 2,
                  cursor: "pointer",
                }}
                onClick={() => selectQuizOption(option.id)}
              >
                {isSubmitted ? (
                  <>
                    {option.isCorrect ? (
                      <>
                        <DoneIcon
                          sx={{
                            ...Styles.icon,
                            background: "#149D4D",
                          }}
                        />
                        {option.option}
                      </>
                    ) : (
                      <>
                        <CloseIcon
                          sx={{
                            ...Styles.icon,
                            background: "#C0141F",
                          }}
                        />
                        {option.option}
                      </>
                    )}
                  </>
                ) : (
                  <>{option.option}</>
                )}
              </Box>
            ))}
          </Box>

          {isSubmitted ? (
            <Box
              sx={{
                backgroundColor: "#5F5F5F",
                color: "white",
                position: "relative",
                textAlign: "center",
                fontSize: "18px",
                padding: "15px",
                borderRadius: "4px",
              }}
            >
              {selectedId === quizzes[index]?.right_answer ? (
                <>
                  <DoneIcon
                    sx={{
                      ...Styles.icon,
                      left: "10px",
                      background: "#149D4D",
                    }}
                  />
                  The answer is correct
                </>
              ) : (
                <>
                  <>
                    <CloseIcon
                      sx={{
                        ...Styles.icon,
                        left: "10px",
                        background: "#C0141F",
                      }}
                    />
                    The answer is incorrect
                  </>
                </>
              )}
            </Box>
          ) : (
            <Button
              variant="contained"
              disableRipple
              sx={{ ...primaryButton, margin: "0 auto" }}
              onClick={() =>
                submitQuiz(quizzes[index].id, quizzes[index].right_answer)
              }
            >
              Submit Answer
            </Button>
          )}
          <Button
            variant="contained"
            sx={{
              ...primaryButton,
              marginLeft: "auto",
              marginTop: "30px",
            }}
            disableRipple
            onClick={index == quizzes.length - 1 ? showQuizResult : goNext}
          >
            {index == quizzes.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuizIndex;
