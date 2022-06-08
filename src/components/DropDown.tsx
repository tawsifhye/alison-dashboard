import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/system";
import { Data } from "interface/interface";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedModule,
  getSelectedModuleItem,
} from "redux/actions/moduleAction";
import { useRouter } from "next/router";
import useSWR from "swr";
import Styles from "../styles/Navbar.module.css";
import { State } from "redux/reducers";

const StyledMenu = styled((props: any) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(2),
    minWidth: 180,
    color: "#465159",
    boxShadow: "-4px 2px 5px -1px rgba(0,0,0,0.20)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("lg")]: {
          marginLeft: theme.spacing("0em"),
          marginRight: theme.spacing("2em"),
        },
        [theme.breakpoints.down("lg")]: {
          marginLeft: theme.spacing("5em"),
        },
        [theme.breakpoints.up("xl")]: {
          marginLeft: theme.spacing("2em"),
          marginRight: theme.spacing(0),
        },
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const DropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuId, setSelectedMenuId] = useState<string>("");
  const [menuLabel, setMenuLabel] = useState<string>("");

  // const fetcher = (url: any): any => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR<Data[]>(
  //   "http://localhost:3000/fakeData.json",
  //   fetcher
  // );

  const { moduleData }: any = useSelector((state: State) => state.moduleInfo);

  const data: Data[] = moduleData;

  console.log(data);

  const router = useRouter();
  const { params, id } = router.query;
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showSubMenu = (id: string) => {
    setSelectedMenuId(id);
  };

  const getSelectedModuleId = (
    label: string,
    id: string,
    type: string,
    index: number
  ) => {
    setMenuLabel(label);
    if (type !== "quiz") {
      dispatch(getSelectedModule(id));
      dispatch(getSelectedModuleItem(index));
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    const filter = data?.find((item) => item.id === id);
    if (filter) setMenuLabel(filter?.title);
  }, [data, id, params]);

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        sx={{
          background: "transparent",
          color: "#465159",
          width: "600px",
          fontWeight: "bold",
          "&:hover": {
            background: "transparent",
          },
        }}
        disableElevation
        disableRipple
        onClick={handleClick}
        startIcon={<KeyboardArrowDownIcon />}
      >
        {data && params ? data[parseInt(params![1]) - 1]?.title : menuLabel}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {data?.map((item, index) => (
          <MenuItem
            key={item.title}
            sx={{ width: "100%" }}
            component="div"
            onMouseOver={() => showSubMenu(item.id)}
            onMouseLeave={() => showSubMenu("")}
            onClick={() => setAnchorEl(null)}
            disableRipple
          >
            <Box component="span"></Box>
            <Box
              component="span"
              sx={{
                border: "2px solid #e8e8e8",
                background: "#f4f5f7",
                width: "20px",
                height: "20px",
                display: "inline-block",
                borderRadius: "100%",
                margin: "2px 28px 0 0",
                left: "20px",
                position: "relative",
                top: "0px",
                transition: "all .3s ease-in",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "-110%",
                  display: index === data.length - 1 ? "none" : "inline-block",
                  zIndex: 10,
                  width: "1px",
                  height: "15px",
                  border: "1px solid #e8e8e8",
                  background: "#f4f5f7",
                },
              }}
            ></Box>
            <Link
              key={item.id}
              href={`/topic/module/${item.id}/${item.submenu[0].slug}`}
            >
              {item.title}
            </Link>
            <ChevronRightIcon />
            {item.id === selectedMenuId && (
              <Box
                sx={{
                  background: "#fff",
                  position: "fixed",
                  width: "auto",
                  padding: 0,
                  left: {
                    xl: "660px",
                  },
                  top: "72px",
                  minHeight: "auto",
                  borderLeft: "1px solid #f4f5f7",
                  boxShadow: "0 3px 8px 0 rgb(50 50 50 / 20%)",
                  "@media screen and (min-width: 1810px) and (max-width: 1861px)":
                    {
                      left: "650px",
                    },
                  "@media screen and (min-width: 1762px) and  (max-width: 1809px)":
                    {
                      left: "640px",
                    },
                  "@media screen and (min-width: 1667px) and (max-width: 1761px)":
                    {
                      left: "620px",
                    },
                  "@media screen and (min-width: 1572px) and (max-width: 1666px)":
                    {
                      left: "599px",
                    },
                  "@media screen and (min-width: 1349px) and (max-width: 1571px)":
                    {
                      left: "550px",
                    },
                  "@media screen and (min-width: 1139px) and (max-width: 1571px)":
                    {
                      left: "500px",
                    },
                }}
              >
                {item.submenu.map((menu, index) => (
                  <Link
                    key={menu.title}
                    href={
                      menu.type === "quiz"
                        ? `/quiz/${item.id}`
                        : `/topic/module/${item.id}/${menu.slug}`
                    }
                  >
                    <MenuItem
                      onClick={() =>
                        getSelectedModuleId(
                          item.title,
                          item.id,
                          menu.type,
                          index
                        )
                      }
                    >
                      <Box
                        component="span"
                        sx={{
                          // border: "2px solid #e8e8e8",
                          border: `${
                            menu.isCompleted
                              ? "2px solid #0295C8"
                              : "2px solid #e8e8e8"
                          } `,
                          background: `${
                            menu.isCompleted ? "#0295C8" : "#e8e8e8"
                          } `,
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                          borderRadius: "100%",
                          margin: "2px 28px 0 0",
                          left: "20px",
                          position: "relative",
                          top: "0px",
                          transition: "all .3s ease-in",
                          "&:before": {
                            content: "''",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: "-110%",
                            display:
                              index === item.submenu.length - 1
                                ? "none"
                                : "inline-block",
                            zIndex: 10,
                            width: "1px",
                            height: "15px",
                            border: `${
                              menu.isCompleted
                                ? "1px solid #0295C8"
                                : "1px solid #e8e8e8"
                            } `,
                            background: `${
                              menu.isCompleted ? "#0295C8" : "#e8e8e8"
                            } `,
                          },
                        }}
                      ></Box>
                      {menu.title}
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            )}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default DropDown;
