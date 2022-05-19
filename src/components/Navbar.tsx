import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Styles from '../styles/Navbar.module.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ProgressBar from './ProgressBar';
import DropDown from './DropDown';
import { useRouter } from 'next/router';



const Navbar = () => {

    const router = useRouter();

    const goHome = () => {
        router.push('/')
    }
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

                    <Box className={Styles.alinson_logo} onClick={goHome} >
                        <Image src='/assets/images/logo.svg' alt='logo' height='100px' width='100px' />
                    </Box>

                    <DropDown />

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 'auto'
                    }}>
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
