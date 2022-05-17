import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';;
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


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
        title: "web development",
        submenu: [
            {
                title: "Frontend",
            },
            {
                title: "Backend",
            },
        ],
    },
    // ...
];





const DropDown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showSubMenu = (id: string) => {
        setShowSideMenu(true);
    }
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
                Options
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
                    menuItems.map(item => (
                        <MenuItem key={item.title} onMouseOver={() => showSubMenu(item.id)} disableRipple>
                            {item.title} <ChevronRightIcon />
                        </MenuItem>

                    ))
                }

                <StyledMenu></StyledMenu>

            </StyledMenu>
        </>
    );
};

export default DropDown;