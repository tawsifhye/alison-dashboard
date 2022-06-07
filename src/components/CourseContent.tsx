import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/system";
import { Data, FinishedModule } from "interface/interface";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { getFinishedModules } from "redux/actions/moduleAction";

const Styles = {
  nextPrevButton: {
    borderRadius: "8px",
    textAlign: "center",
    background: "#374651",
    boxShadow: "0 3px 8px 0 rgb(50 50 50 / 20%)",
  },
  nextPrevArrow: {
    position: "absolute",
    display: {
      xs: "none",
      md: "block",
    },
    right: "-40px",
    background: "#374651",
    color: "#fff",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    pointerEvents: "all",
    borderRadius: "100%",
  },
};

interface Props {
  currentModule?: Data;
}

const CourseContent = ({ currentModule }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState<string>();
  const router = useRouter();
  const { params } = router.query;
  const dispatch = useDispatch();
  const { finishedModules }: any = useSelector(
    (state: State) => state.moduleInfo
  );

  const goNextPrevious = (type: string) => {
    if (type === "previous") {
      router.push(
        `/topic/module/${currentModule?.id}/${
          currentModule?.submenu[index - 1].slug
        }`
      );
      return;
    }

    const filteredModule = finishedModules.find(
      (module: FinishedModule) => module.moduleId === currentModule?.id
    );
    console.log(filteredModule, "filterd module");
    console.log(finishedModules, "finishedModules module");

    if (!filteredModule) {
      const newFinishedModule: any = {
        moduleId: currentModule?.id,
        completedLessonId: [currentModule?.submenu[index].id],
      };
      const newArr = [...finishedModules, newFinishedModule];
      dispatch(getFinishedModules(newArr));
    } else {
      const lessonIndex = finishedModules.findIndex(
        (module: FinishedModule) => module.moduleId === filteredModule.moduleId
      );

      // checking if id is in array or not if not then dispatching and updated progress "Hamim"
      if (
        finishedModules[lessonIndex].completedLessonId.indexOf(
          currentModule?.submenu[index].id
        ) == -1
      ) {
        const newLessonsId = [
          ...finishedModules[lessonIndex].completedLessonId,
          currentModule?.submenu[index].id,
        ];
        finishedModules[lessonIndex].completedLessonId = newLessonsId;
        dispatch(getFinishedModules(finishedModules));
      }
    }

    // push to next route ------------------------------- "Hamim"
    if (currentModule?.submenu[index + 1].type === "video") {
      setIndex(index + 1);
      router.push(
        `/topic/module/${currentModule.id}/${
          currentModule.submenu[index + 1].slug
        }`
      );
    } else if (currentModule?.submenu[index + 1].type === "quiz") {
      router.push(`/quiz/${currentModule.id}`);
    }
  };

  useEffect(() => {
    if (params) {
      const lesson = currentModule?.submenu.find(
        (lesson) => lesson.slug === params[2]
      );
      if (lesson) setVideoUrl(lesson?.videoUrl);
      const index = currentModule?.submenu.findIndex((object) => {
        return object.slug === params[2];
      });
      if (typeof index === "number") {
        setIndex(index);
      }
    }
  }, [index, params, currentModule?.submenu]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "65vh",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          padding: "10px 60px 60px 60px",
          maxWidth: 850,
          height: 500,
          mx: "auto",
          mt: 15,
          display: {
            md: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: "#fff",
          boxShadow: "0 3px 3px 0 rgb(50 50 50 / 20%)",
          mb: 5,
        }}
      >
        <Box
          onClick={() => goNextPrevious("previous")}
          sx={{
            position: "absolute",
            height: "250px",
            width: "70px",
            zIndex: "-1",
            color: "#fff",
            left: "-30px",
            fontWeight: "100",
            borderRadius: "76% 26% 26% 76% / 79% 20% 20% 79%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            background: `${index ? "#00BCFF" : "#BABCBC"}`,
            pointerEvents: `${index ? "all" : "none"}`,
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "2rem" }} />
        </Box>

        <ReactPlayer url={videoUrl} controls={true} width="100%" height="90%" />
        {/* this is mobile next prev btn */}
        <Box
          sx={{
            mt: 2,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            disableRipple
            startIcon={<ArrowBackIosNewIcon />}
            sx={Styles.nextPrevButton}
            disabled={index === 0}
            onClick={() => goNextPrevious("previous")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            disableRipple
            endIcon={<ArrowForwardIosIcon />}
            sx={Styles.nextPrevButton}
            onClick={() => goNextPrevious("next")}
          >
            Next
          </Button>
        </Box>

        {/* this is desktop next btn */}
        <Box
          onClick={() => goNextPrevious("next")}
          sx={{
            position: "absolute",
            background: "#00BCFF",
            height: "250px",
            width: "70px",
            zIndex: "-1",
            color: "#fff",
            right: "-30px",
            fontWeight: "100",
            borderRadius: "76% 26% 26% 76% / 79% 20% 20% 79%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            transform: "scaleX(-1)",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "2rem" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseContent;
