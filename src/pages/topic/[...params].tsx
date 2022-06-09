import { Box } from "@mui/material";
import CourseContent from "components/CourseContent";
import LearnerNavigation from "components/LearnerNavigation";
import { Data } from "interface/interface";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiModules } from "redux/actions/moduleAction";
import { resetQuiz } from "redux/actions/quizAction";
import { State } from "redux/reducers";
import useSWR from "swr";

const Slug = () => {
  const [currentModule, setCurrentModule] = useState<Data>();
  const router = useRouter();
  const { params } = router.query;
  const fetcher = (url: any): any => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Data[]>(
    "https://alison-dashboard-i24nie5tc-tawsifhye.vercel.app/fakeData.json",
    fetcher
  );
  const dispatch = useDispatch();

  const filterData = () => {
    if (params) {
      const modulesData = data?.find((data) => data.id === params[1]);
      setCurrentModule(modulesData);
    }
  };

  useEffect(() => {
    filterData();
    dispatch(resetQuiz());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, params && params[2]]);

  const { moduleData }: any = useSelector((state: State) => state.moduleInfo);

  useEffect(() => {
    if (data && moduleData.length == 0) {
      dispatch(fetchApiModules(data));
    }
  }, [data]);

  return (
    <Box sx={{}}>
      <CourseContent currentModule={currentModule} />
      <LearnerNavigation />
    </Box>
  );
};

export default Slug;
