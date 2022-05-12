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
            // position: 'relative'
        }}>

            {/* <Image src='/assets/images/footertriangles.png' alt='helo' width='300px' height='300px' /> */}
            <Container>

                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
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

                    </Grid>
                    <Grid item xs={6} lg={3}>

                    </Grid>
                    <Grid item xs={6} lg={3}>

                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Footer;