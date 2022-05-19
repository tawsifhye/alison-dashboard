import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';;
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Data } from 'interface/interface';
import Link from 'next/link';


const StyledMenu = styled((props: any) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: '#465159',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const menuItems = [
    // ...
    {
        id: "1",
        title: "Module 1: Preventive Maintenance",
        submenu: [
            {
                title: "Topic A",
                videoUrl: "https://youtu.be/TsDsE9fePLk",
            },
            {
                title: "Topic A - Demo 1 -Preventive Maintenance",
                videoUrl: "https://www.youtube.com/watch?v=cwP1vTqVaR4"
            },
        ],
    },
    {
        id: "2",
        title: "Programming",
        submenu: [
            {
                title: "C",
            },
            {
                title: "JAVA",
            },
            {
                title: "C++",
            },
        ],
    },
    // ...
];





const DropDown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
    const [selectedMenuId, setSelectedMenuId] = useState<string>("");
    const [menuLabel, setMenuLabel] = useState<string>(menuItems[0].title);
    const [moduleData, setModuleData] = useState<Data[]>([]);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showSubMenu = (id: string) => {
        setSelectedMenuId(id);
        setShowSideMenu(true);
    }

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data))
    }, [])

    // console.log(moduleData);
    return (
        <>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                sx={{
                    background: '#fff',
                    color: '#465159',
                    '&:hover': {
                        background: 'transparent'
                    }
                }}
                disableElevation
                disableRipple
                onClick={handleClick}
                startIcon={<KeyboardArrowDownIcon />}
            >
                {menuLabel}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    moduleData.map(item => (
                        <MenuItem sx={{ width: '100%' }} key={item.title} onMouseOver={() => showSubMenu(item.id)}
                            onMouseLeave={() => showSubMenu('')} disableRipple>
                            {item.title} <ChevronRightIcon />
                            {item.id === selectedMenuId && < Box
                                sx={{
                                    background: '#fff',
                                    position: 'fixed',
                                    width: 'auto',
                                    padding: 0,
                                    // left: '350px',
                                    left: 'calc(20% + 150px)',
                                    top: '72px',
                                    minHeight: 'auto',
                                    borderLeft: '1px solid #f4f5f7',
                                    // box-shadow: 0 3px 8px 0 #323232;
                                    boxShadow: '0 3px 8px 0 rgb(50 50 50 / 20%)'
                                }}
                            >
                                {item.submenu.map(menu => (
                                    <MenuItem key={menu.title} onClick={() => setMenuLabel(item.title)} >
                                        <Box component='span'>
                                            <Link href={menu.type === 'quiz' ? `/quiz/${item.id}` : ''}>
                                                {menu.title}
                                            </Link>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Box>
                            }
                        </MenuItem>

                    ))
                }


            </StyledMenu>
        </>
    );
};

export default DropDown;