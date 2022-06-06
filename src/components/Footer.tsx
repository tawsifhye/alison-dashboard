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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
            className={Styles.imagefoot}
          />
        </Box>
        <Box onClick={backToTop} className={Styles.footer_top_btn}>
          <ArrowForwardIosIcon />
        </Box>
        <Container
          sx={{
            padding: "20px 0 0 0",
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              sx={{
                mx: { xs: 0, lg: 2 },
              }}
            >
              <Box sx={{ px: { xs: 2, sm: 0 } }}>
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
                    <Link href="/">
                      <a>Our Story</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Open Positions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Alison Programmes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Empower Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Our Publishers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Index</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
              <Box sx={{ px: { xs: 2, sm: 0 } }}>
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
                    <Link href="/">
                      <a>Get the App</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>COVID19 Emergency course</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>About Alison Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Alison Testimonials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>East Africa Graduate Outcomes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Accreditation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Premium Learning</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Refer a Friend</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Pricing</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
              <Box sx={{ px: { xs: 2, sm: 0 } }}>
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
                    <Link href="/">
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Become a Self Publisher</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Become a Course Creator</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Training Webinars</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Alison for Business</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Graduate Outcomes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Free Personality Test</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Free Wellbeing Check-up</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Media Centre</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Affiliate Programme</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2} sx={{ mx: { xs: 0, lg: 2 } }}>
              <Box sx={{ px: { xs: 2, sm: 0 } }}>
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
                    <Link href="/">
                      <a>
                        <ContactSupportTwoToneIcon
                          className={Styles.icon_style}
                        />
                        <span>FAQ</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <FacebookTwoToneIcon className={Styles.icon_style} />
                        <span>Facebook</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <TwitterIcon className={Styles.icon_style} />
                        <span>Twitter</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <LinkedInIcon className={Styles.icon_style} />
                        <span>LinkedIn</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <InstagramIcon className={Styles.icon_style} />
                        <span>Instagram</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
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
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <YouTubeIcon className={Styles.icon_style} />
                        <span>YouTube</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <EmailIcon className={Styles.icon_style} />
                        <span>Customer Support</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: "#1B232E",
          py: 2,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image
            src="/assets/images/logo-footer.svg"
            alt="helo"
            width="135px"
            height="30px"
            objectFit={"contain"}
          />
          <Box
            sx={{
              display: "inline-block",
              ml: { xs: 0, md: 2 },
              "*": {
                color: "#505960",
                px: 2,
                fontWeight: "light",
                fontSize: ".9rem",
                "&:not(:last-child)": {
                  borderRight: "2px solid #505960 ",
                },
              },
            }}
          >
            <Link href="/">© Alison 2022</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Cookie Policy</Link>
            <Link href="/">Sitemap</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
