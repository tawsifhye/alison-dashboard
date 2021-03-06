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
    const [currentModulePercentage, setCurrentModulePercentage] = React.useState<number>(0);
    const goHome = () => {
        router.push('/topic/module/1/topic-a')
    }
    return (
        <AppBar sx={{
            display: {
                xs: 'none',
                md: 'block',
            },
            '@media screen and (max-width: 1138px)': {
                display: 'none'
            }
        }}>
            <Container maxWidth="xl">
                <Toolbar sx={{
                    position: "fixed",
                    width: "100%",
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
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginLeft: 'auto'
                    }}>
                        <Typography sx={{ color: 'black', marginLeft: 'auto' }}></Typography>
                        <Box component='span' sx={{ color: 'black', mr: 5 }}>  {currentModulePercentage.toFixed()}% Complete
                            <ProgressBar bgcolor='#83C124' currentModulePercentage={currentModulePercentage} setCurrentModulePercentage={setCurrentModulePercentage} />
                        </Box>
                        <AccountCircleRoundedIcon sx={{ color: '#374651' }} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
