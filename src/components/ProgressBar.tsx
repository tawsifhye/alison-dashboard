import { Data, FinishedModule } from "interface/interface";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import useSWR from "swr";
import Styles from "../styles/Navbar.module.css";
interface Props {
  bgcolor?: string;
  currentModulePercentage?: number;
  setCurrentModulePercentage: (currentModulePercentage: number) => void;
}

interface Percentage {
  moduleId: string;
  percentage: number;
}

const ProgressBar = ({
  bgcolor,
  currentModulePercentage,
  setCurrentModulePercentage,
}: Props) => {
  const [currentFinishedModule, setCurrentFinishedModule] =
    useState<FinishedModule>();
  const [currentModule, setCurrentModule] = useState<Data>();
  const [percentage, setPercentage] = useState<Array<Percentage>>();

  const { finishedModules }: any = useSelector(
    (state: State) => state.moduleInfo
  );
  const fetcher = (url: any): any => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Data[]>(
    "https://alison-dashboard.vercel.app/fakeData.json",
    fetcher
  );
  const router = useRouter();
  const { params } = router.query;
  // console.log(finishedModules);
  useEffect(() => {
    if (params) {
      const filteredFinishedModule = finishedModules.find(
        (module: FinishedModule) => module.moduleId === params[1]
      );
      setCurrentFinishedModule(filteredFinishedModule);
      const filteredModule = data?.find((module) => module.id == params[1]);
      setCurrentModule(filteredModule);
      if (currentModule && currentFinishedModule) {
        const completePercent =
          (100 / currentModule?.submenu.length) *
          currentFinishedModule?.completedLessonId.length;
        if (!percentage) {
          const obj = {
            moduleId: currentModule.id,
            percentage: completePercent,
          };
          setPercentage([obj]);
        } else {
          const newArr = [
            ...percentage,
            {
              moduleId: currentModule.id,
              percentage: completePercent,
            },
          ];
          setPercentage(newArr);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    finishedModules,
    params,
    data,
    currentFinishedModule?.completedLessonId.length,
  ]);

  useEffect(() => {
    const filter = percentage?.filter(
      (item) => item.moduleId === currentModule?.id
    );
    if (filter) {
      setCurrentModulePercentage(filter[filter.length - 1]?.percentage);
    }
    if (filter?.length == 0) {
      setCurrentModulePercentage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentModule?.id, percentage]);

  const Parentdiv = {
    height: "5px",
    width: "150px",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "5px 0",
  };

  const Childdiv = {
    height: "100%",
    width: `${currentModulePercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <>
      <div style={Parentdiv}>
        <div style={{ ...Childdiv, textAlign: "right" }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
