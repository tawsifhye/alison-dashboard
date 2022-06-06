import styled from "@emotion/styled";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import Styles from "../styles/Footer.module.css";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E3942",
        position: "relative",
      }}
    >
      <Box
        className={Styles.footer_image}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Image
          src="/assets/images/footertriangles.png"
          alt="helo"
          width="250px"
          height="200px"
        />
      </Box>
      <Container
        sx={{
          padding: "30px 0",
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={6} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
            <Typography
              sx={{
                display: "inline-block",
                borderBottom: "2px solid #0091c7",
                width: "auto",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "light",
              }}
            >
              ABOUT ALISON
            </Typography>
            <ul className={Styles.footer_ul}>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Open Positions</a>
              </li>
              <li>
                <a href="">Alison Programmes</a>
              </li>
              <li>
                <a href="">Empower Us</a>
              </li>
              <li>
                <a href="">Our Publishers</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Index</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
            <Typography
              sx={{
                display: "inline-block",
                borderBottom: "2px solid #0091c7",
                width: "auto",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "light",
              }}
            >
              Learning
            </Typography>
            <ul className={Styles.footer_ul}>
              <li>
                <a href="">Get the App</a>
              </li>
              <li>
                <a href="">COVID19 Emergency course</a>
              </li>
              <li>
                <a href="">About Alison Courses</a>
              </li>
              <li>
                <a href="">Alison Testimonials</a>
              </li>
              <li>
                <a href="">East Africa Graduate Outcomes</a>
              </li>
              <li>
                <a href="">Accreditation</a>
              </li>
              <li>
                <a href="">Premium Learning</a>
              </li>
              <li>
                <a href="">Refer a Friend</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
            <Typography
              sx={{
                display: "inline-block",
                borderBottom: "2px solid #0091c7",
                width: "auto",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "light",
              }}
            >
              More
            </Typography>
            <ul className={Styles.footer_ul}>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Become a Self Publisher</a>
              </li>
              <li>
                <a href="">Become a Course Creator</a>
              </li>
              <li>
                <a href="">Training Webinars</a>
              </li>
              <li>
                <a href="">Alison for Business</a>
              </li>
              <li>
                <a href="">Graduate Outcomes</a>
              </li>
              <li>
                <a href="">Free Personality Test</a>
              </li>
              <li>
                <a href="">Free Wellbeing Check-up</a>
              </li>
              <li>
                <a href="">Media Centre</a>
              </li>
              <li>
                <a href="">Affiliate Programme</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
            <Typography
              sx={{
                display: "inline-block",
                borderBottom: "2px solid #0091c7",
                width: "auto",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "light",
              }}
            >
              Connect
            </Typography>
            <ul className={Styles.footer_ul}>
              <li>
                <a href="">
                  <ContactSupportTwoToneIcon className={Styles.icon_style} />{" "}
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookTwoToneIcon className={Styles.icon_style} />{" "}
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterIcon className={Styles.icon_style} />{" "}
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="">
                  <LinkedInIcon className={Styles.icon_style} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramIcon className={Styles.icon_style} />{" "}
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    className={Styles.icon_style}
                    width="12px"
                    height="12px"
                    viewBox="0 0 512 512"
                    id="icons"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#767b7f"
                  >
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                  </svg>
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a href="">
                  <YouTubeIcon className={Styles.icon_style} />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="">
                  <EmailIcon className={Styles.icon_style} />
                  <span>Customer Support</span>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
