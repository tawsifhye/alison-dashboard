import { Button, Pagination, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Option, Quiz, SubMenu, SubmittedAnswer } from "interface/interface";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { primaryButton } from "styles/commonStyles";

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
  quizzes: Quiz[] | undefined;
}

interface Answer {
  submittedAnswer: SubmittedAnswer[];
}

interface Props {
  setShowReview: (showReview: boolean) => void;
  setShowResult: (showResult: boolean) => void;
  quiz: SubMenu;
}
const Review = ({ quiz, setShowReview, setShowResult }: Props) => {
  const { quizzes }: any = quiz;
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const { submittedAnswer }: Answer = useSelector(
    (state: State) => state.answers
  );

  useEffect(() => {
    let rightPercentage = 0;
    submittedAnswer?.forEach((answer: SubmittedAnswer) => {
      if (answer.selectedAnswer === answer.rightAnswer) {
        rightPercentage += 10;
      }
      setPercentage(rightPercentage);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnToHome = () => {
    setShowReview(false);
    setShowResult(true);
  };

  return (
    <Box
      sx={{
        minWidth: 275,
        maxWidth: 900,
        height: 800,

        mx: "auto",
        fontWeight: 400,
        position: "relative",
        background: "#fff",
        zIndex: 100,
        marginTop: 20,
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
          sx={{
            marginTop: "50px",
            fontSize: "25px",
            color: "#3F4A52",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Your Score:{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "#3F4A52" }}>
            {percentage}%
          </Box>
        </Typography>

        <Box
          sx={{
            backgroundColor: "#CBCBCB",
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "5px 20px",
          }}
        >
          {quizzes.map((quiz: any, index: number) => (
            <Box
              key={quiz.id}
              sx={{
                backgroundColor: index === quizIndex ? "#fff" : "#547B9B",
                color: index === quizIndex ? "#547B9B" : "#fff",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#42617A",
                },
              }}
              onClick={() => setQuizIndex(index)}
            >
              Q{index + 1}
            </Box>
          ))}
        </Box>

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
          {quizIndex + 1}/{quizzes[quizIndex]?.question}
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
          {quizzes[quizIndex]?.options.map((option: Option) => (
            <Box
              key={option.id}
              sx={{
                background: "rgba(0,0,0,.4)",
                border:
                  submittedAnswer[quizIndex].selectedAnswer === option.id
                    ? "2px solid white"
                    : "2px solid transparent",
                marginBottom: "20px",
                color: " #fff",
                position: "relative",
                fontSize: "18px",
                p: 2,
                cursor: "pointer",
              }}
            >
              {
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
              }
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            backgroundColor: "#5F5F5F",
            color: "white",
            width: "80%",
            mx: "auto",
            position: "relative",
            textAlign: "center",
            fontSize: "18px",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          {submittedAnswer[quizIndex].selectedAnswer ===
          quizzes[quizIndex]?.right_answer ? (
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
        <Button
          sx={{ ...primaryButton, mx: "auto", mt: 5 }}
          variant="contained"
          disableRipple
          onClick={returnToHome}
        >
          Return
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
