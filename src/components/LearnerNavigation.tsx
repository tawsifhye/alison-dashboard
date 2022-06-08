import { Button, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";

const LearnerNavigation = () => {
  const Styles = {
    buttonContainerBox: {
      maxWidth: 850,
      mx: "auto",
      boxShadow: "0 3px 8px 0 rgba(50,50,50, 0.2)",
      borderRadius: "3px",
      mt: 10,
      mb: 4,
    },
    buttonWrapper: {
      color: "#2D3942",
      p: "1em 2em",
      borderBottom: "2px solid transparent",
      "&:hover": {
        borderBottom: "2px solid #0091C6",
      },
    },
    buttonText: {
      ml: 2,
      fontSize: "0.9rem",
    },
    remindersContainerBox: {
      bgcolor: "#fff",
      px: 3,
      py: 2,
    },
    remindersTitleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    },
    remindersDayContainer: {
      bgcolor: "#F3F5F7",
      px: 3,
      py: 1,
      my: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  // ----------------
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [showStudyReminders, setShowStudyReminders] = useState(false);

  return (
    <>
      <Box sx={Styles.buttonContainerBox}>
        <Button
          sx={{ ...Styles.buttonWrapper, borderRight: "2px solid #fff" }}
          onClick={() => setShowStudyReminders(!showStudyReminders)}
        >
          <Image
            src="/assets/images/reminders.svg"
            height={20}
            width={20}
            alt="icon"
          />
          <Typography component="span" sx={Styles.buttonText}>
            Study Reminders
          </Typography>
        </Button>
        <Button sx={Styles.buttonWrapper}>
          <Image
            src="/assets/images/intercom-logo.png"
            height={22}
            width={22}
            alt="icon"
          />
          <Typography component="span" sx={Styles.buttonText}>
            Support
          </Typography>
        </Button>
        {/* ---------------------------------- */}

        {showStudyReminders && (
          <Box sx={Styles.remindersContainerBox}>
            <Box sx={Styles.remindersTitleContainer}>
              <Typography sx={{ fontWeight: "bold" }}>
                Set your study reminders
              </Typography>
              <Typography sx={{ fontSize: ".7rem", color: "#a5acb1" }}>
                We will email you at these times to remind you to study.
              </Typography>
            </Box>
            <Box sx={Styles.remindersDayContainer}>
              <Box>
                <Typography sx={{ fontSize: "1rem" }}>Monday</Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#a5acb1" }}>
                  Reminder off
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ textAlign: "center" }}>5am</Typography>
                <Switch
                  size="small"
                  defaultChecked={false}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default LearnerNavigation;
