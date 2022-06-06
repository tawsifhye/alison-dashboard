import React, { SyntheticEvent, useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Data } from "interface/interface";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  getSelectedModule,
  getSelectedModuleItem,
} from "redux/actions/moduleAction";
import { Box } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function MobileDropDown() {
  const [menuLabel, setMenuLabel] = useState<string>("");
  const [expanded, setExpanded] = useState<string | false>(false);
  const [currentModulePercentage, setCurrentModulePercentage] =
    useState<number>(0);
  const fetcher = (url: any): any => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Data[]>(
    "https://tawsifhye.github.io/data/alisonmodule.json",
    fetcher
  );
  const router = useRouter();
  const { params } = router.query;
  const dispatch = useDispatch();

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const getSelectedModuleId = (
    label: string,
    id: string,
    type: string,
    index: number
  ) => {
    setExpanded(false);
    setMenuLabel(label);
    if (type !== "quiz") {
      dispatch(getSelectedModule(id));
      dispatch(getSelectedModuleItem(index));
    }
  };

  return (
    <Accordion
      elevation={0}
      sx={{
        width: "100%",
        mt: 2,
        display: {
          md: "none",
        },
        "& .MuiAccordion-root:before": {
          height: "0px",
        },
        "@media screen and (max-width: 1138px)": {
          display: "block",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon
            sx={{
              backgroundColor: "#465159",
              color: "#fff",
              borderRadius: "50%",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box
          sx={{
            fontWeight: 500,
            color: "#465159",
          }}
        >
          {data && params ? data[parseInt(params![1]) - 1]?.title : menuLabel}
          <ProgressBar
            bgcolor="#F49B29"
            currentModulePercentage={currentModulePercentage}
            setCurrentModulePercentage={setCurrentModulePercentage}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {data?.map((module, index) => (
          <React.Fragment key={index}>
            <Accordion
              key={module.id}
              expanded={expanded === module.id}
              onChange={handleChange(module.id)}
              sx={{
                boxShadow: "none",
                padding: 0,
              }}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                onClick={() => handleChange(module.id)}
                sx={{
                  padding: "0px !important",
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    flexShrink: 0,
                    marginTop: "-15px",
                    backgroundColor: "#E8E8E8",
                    padding: "10px",
                  }}
                >
                  {module?.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {module?.submenu.map((menu, index) => (
                  <Link
                    key={menu.title}
                    href={
                      menu.type === "quiz"
                        ? `/quiz/${module.id}`
                        : `/topic/module/${module.id}/${menu.slug}`
                    }
                  >
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        cursor: "pointer",
                        "&:first-child": {
                          marginTop: "0px",
                        },
                      }}
                      onClick={() =>
                        getSelectedModuleId(
                          module.title,
                          module.id,
                          menu.type,
                          index
                        )
                      }
                    >
                      {menu?.title}
                    </Typography>
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
