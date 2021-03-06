import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Styles from '../styles/Navbar.module.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ProgressBar from './ProgressBar';
import SearchIcon from '@mui/icons-material/Search';
import MobileDropDown from './MobileDropDown';


const MobileNav = () => {

    const router = useRouter();

    const goHome = () => {
        router.push('/')
    }
    return (
        <>
            <Box sx={{
                position: 'relative',
                width: '100%',
                padding: '15px 24px',
                height: '72px',
                background: '#fff',
                display: {
                    xs: 'flex',
                    md: 'none'
                },
                justifyContent: 'space-between',
                alignItems: 'center',
                '@media screen and (max-width: 1138px)': {
                    display: 'flex'
                }
            }}>
                <Box>
                    <MenuIcon sx={{ color: '#6F787E' }} />
                    <SearchIcon sx={{ color: '#6F787E', marginLeft: '5px' }} />
                </Box>
                <Box className={Styles.alinson_logo} onClick={goHome} >
                    <Image src='/assets/images/logo.svg' alt='logo' height='100px' width='100px' />
                </Box>
                <AccountCircleRoundedIcon sx={{ color: '#374651' }} />
            </Box>
            <MobileDropDown />
        </>
    );
};
export default MobileNav;
