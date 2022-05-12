import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Styles from '../styles/Navbar.module.css';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Divider from '@mui/material/Divider';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProgressBar from './ProgressBar';
import { height } from '@mui/system';

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
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
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





const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [label, setLabel] = React.useState("");
    const [openSideBar, setOpenSideBar] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const openSubMenu = () => {
        setOpenSideBar(true);
    }

    React.useEffect(() => {

        setOpenSideBar(false);
    }, [])

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar sx={{
                    position: "fixed",
                    width: "100%",
                    zIndex: 999,
                    top: 0,
                    left: 0,
                    padding: '15px 24px',
                    height: '72px',
                    background: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box className={Styles.alinson_logo} >
                        <Image src='/assets/images/logo.svg' alt='logo' height='100px' width='100px' />
                    </Box>

                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        disableElevation
                        onClick={handleClick}
                        startIcon={<KeyboardArrowDownIcon />}
                        variant="text"
                        sx={{
                            color: '#000',
                            // marginLeft: 'auto'
                        }}
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
                        sx={{
                            position: 'relative',
                            height: '500px'
                        }}
                    >
                        <MenuItem onClick={handleClose} onMouseOver={openSubMenu} disableRipple className={Styles.sub_dropdown}>
                            Module 1: Preventive Maintenance
                            <ul id="sub-dropdown-menu" className={Styles.sub_dropdown_menu}>
                                <li>Topic A</li>
                                <li>Topic A Demo 1</li>
                                <li>Review Quiz</li>
                            </ul>
                        </MenuItem>
                    </StyledMenu>

                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <Typography sx={{ color: 'black', marginLeft: 'auto' }}></Typography>
                        <Box component='span' sx={{ color: 'black' }}>  0% Complete</Box>
                        <ProgressBar bgcolor='#83C124' progress='50' />
                        <AccountCircleRoundedIcon sx={{ color: '#374651' }} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
