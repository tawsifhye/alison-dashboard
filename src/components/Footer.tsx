import styled from '@emotion/styled';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Styles from '../styles/Footer.module.css';
const Footer = () => {


    return (
        <Box sx={{
            backgroundColor: '#2E3942',
            position: 'relative'
        }}>
            <Box className={Styles.footer_image} sx={{
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }}>

                <Image src='/assets/images/footertriangles.png' alt='helo' width='250px' height='200px' />
            </Box>
            <Container sx={{
                maxWidth: {
                    xl: 'xl',
                    lg: 'lg'
                },
                padding: '50px 0'
            }}>

                <Grid container spacing={2}>
                    <Grid item xs={6} lg={3}>
                        <Typography sx={{
                            display: 'inline-block',
                            borderBottom: '2px solid #0091c7',
                            width: 'auto',
                            color: '#fff',
                            fontSize: '1.2rem'
                        }}
                        >
                            About Alison
                        </Typography>
                        <ul className={Styles.footer_ul}>
                            <li> <a href="">Our Story</a> </li>
                            <li> <a href="">Open Positions</a> </li>
                            <li> <a href="">Alison Programmes</a> </li>
                            <li> <a href="">Empower Us</a> </li>
                            <li> <a href="">Our Publishers</a> </li>
                            <li> <a href="">Blog</a> </li>
                            <li> <a href="">Index</a> </li>
                        </ul>

                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Typography sx={{
                            display: 'inline-block',
                            borderBottom: '2px solid #0091c7',
                            width: 'auto',
                            color: '#fff',
                            fontSize: '1.2rem'
                        }}
                        >
                            Learning
                        </Typography>
                        <ul className={Styles.footer_ul}>
                            <li> <a href="">Get the App</a> </li>
                            <li> <a href="">COVID19 Emergency course</a> </li>
                            <li> <a href="">About Alison Courses</a> </li>
                            <li> <a href="">Alison Testimonials</a> </li>
                            <li> <a href="">East Africa Graduate Outcomes</a> </li>
                            <li> <a href="">Accreditation</a> </li>
                            <li> <a href="">Premium Learning</a> </li>
                            <li> <a href="">Refer a Friend</a> </li>
                            <li> <a href="">Pricing</a> </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Typography sx={{
                            display: 'inline-block',
                            borderBottom: '2px solid #0091c7',
                            width: 'auto',
                            color: '#fff',
                            fontSize: '1.2rem'
                        }}
                        >
                            More
                        </Typography>
                        <ul className={Styles.footer_ul}>
                            <li> <a href="">Shop</a> </li>
                            <li> <a href="">Become a Self Publisher</a> </li>
                            <li> <a href="">Become a Course Creator</a> </li>
                            <li> <a href="">Training Webinars</a> </li>
                            <li> <a href="">Alison for Business</a> </li>
                            <li> <a href="">Graduate Outcomes</a> </li>
                            <li> <a href="">Free Personality Test</a> </li>
                            <li> <a href="">Free Wellbeing Check-up</a> </li>
                            <li> <a href="">Media Centre</a> </li>
                            <li> <a href="">Affiliate Programme</a> </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Typography sx={{
                            display: 'inline-block',
                            borderBottom: '2px solid #0091c7',
                            width: 'auto',
                            color: '#fff',
                            fontSize: '1.2rem'
                        }}
                        >
                            Connect
                        </Typography>
                        <ul className={Styles.footer_ul}>
                            <li> <a href="">FAQ</a> </li>
                            <li> <a href="">Facebook</a> </li>
                            <li> <a href="">Twitter</a> </li>
                            <li> <a href="">LinkedIn</a> </li>
                            <li> <a href="">Instagram</a> </li>
                            <li> <a href="">TikTok</a> </li>
                            <li> <a href="">YouTube</a> </li>
                            <li> <a href="">Customer Support</a> </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Footer;