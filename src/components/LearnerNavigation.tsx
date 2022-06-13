import { Button, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

  const [showStudyReminders, setShowStudyReminders] = useState(false);

  const [values, setValues] = useState({
    send_to: "rahmanhamiminfo@gmail.com",
    to_name: "Hamim",
    message:
      "You asked us to remind you to learn on Tuesdays at this hour. Tranform your career by exploring new topics, gaining knowledge, and getting certified. Keep going, youre almost there!",
    org: "Alison Learning",
  });

  const sendEmailNotification = () => {
    emailjs
      .send("service_wiazbrr", "template_yp8y50p", values, "xdAX8_wnD6Um5HxoB")
      .then(
        (res) => {
          console.log("SUCCESS", res);
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
  };

  // ------------------ current time calc -------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [date, setDate] = useState(new Date());

  let dayNumber = date.getDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = daylist[dayNumber];
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let prepand = hour >= 12 ? "PM" : "AM";
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === "PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Noon";
    } else {
      hour = 12;
      prepand = "PM";
    }
  }
  if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Midnight";
    } else {
      hour = 12;
      prepand = "AM";
    }
  }

  const currentTime = hour + ":" + minute;

  // --------------- current time calc end ---------------------

  // ------------------------- user time setting--------------

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [userReminderList, setReminderList] = useState([
    { day: "Sunday", time: "6", meridiem: "PM", checked: false },
    { day: "Monday", time: "6", meridiem: "PM", checked: false },
    { day: "Tuesday", time: "6", meridiem: "PM", checked: false },
    { day: "Wednesday", time: "6", meridiem: "PM", checked: false },
    { day: "Thursday", time: "6", meridiem: "PM", checked: false },
    { day: "Friday", time: "6", meridiem: "PM", checked: false },
    { day: "Saturday", time: "6", meridiem: "PM", checked: false },
  ]);

  const handleReminderList = (day: string, select: boolean) => {
    userReminderList.map((item) => {
      if (item.day == day) {
        item.checked = !item.checked;
      }
      setReminderList(userReminderList);
    });
  };

  //  plus minus btn
  const handleTimePlus = (day: string) => {
    userReminderList.map((item) => {
      if (item.day === day) {
        if (item.time == "11") {
          item.meridiem = item.meridiem == "PM" ? "AM" : "PM";
        }

        if (item.time == "12") {
          item.time = "1";
        } else {
          let time = Number(item.time) + 1;
          item.time = time.toString();
        }
      }
    });
    console.log(userReminderList);
  };
  const handleTimeMinus = (day: string) => {
    userReminderList.map((item) => {
      if (item.day === day) {
        if (item.time == "12") {
          item.meridiem = item.meridiem == "PM" ? "AM" : "PM";
        }

        if (item.time == "1") {
          item.time = "12";
        } else {
          let time = Number(item.time) - 1;
          item.time = time.toString();
        }
      }
    });
  };

  const [isMailSent, setIsMailSent] = useState(false);

  userReminderList.forEach((item) => {
    // console.log(item.meridiem, prepand);

    if (
      item.day == currentDay &&
      item.checked == true &&
      currentTime[0] == item.time &&
      item.meridiem == prepand &&
      isMailSent == false
    ) {
      console.log("EMAIL SEND SUCESSFULLY");
      sendEmailNotification();
      setIsMailSent(true);
    }
  });

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
            {userReminderList.map((reminder) => (
              <Box key={reminder.day} sx={Styles.remindersDayContainer}>
                <Box>
                  <Typography sx={{ fontSize: "1rem" }}>
                    {reminder.day}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#a5acb1" }}>
                    Reminder off
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* time */}
                  <Typography
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      alignContent: "center",
                      "&:hover": {
                        "*": {
                          opacity: "1",
                        },
                      },
                    }}
                  >
                    <Typography component="span">
                      <RemoveIcon
                        sx={{
                          bgcolor: "#0295C8",
                          height: "20px",
                          width: "20px",
                          color: "#fff",
                          borderRadius: "50%",
                          mr: "4px",
                          cursor: "pointer",
                          // opacity: "0",
                          transition: "opacity 300ms",
                        }}
                        onClick={() => handleTimeMinus(reminder.day)}
                      />
                    </Typography>
                    {reminder.time}:00 {reminder.meridiem}
                    <Typography component="span">
                      <AddIcon
                        sx={{
                          bgcolor: "#0295C8",
                          height: "20px",
                          width: "20px",
                          color: "#fff",
                          borderRadius: "50%",
                          ml: "4px",
                          cursor: "pointer",
                          // opacity: "0",
                          transition: "opacity 300ms",
                        }}
                        onClick={() => handleTimePlus(reminder.day)}
                      />
                    </Typography>
                  </Typography>
                  {/* time end */}
                  <Switch
                    sx={{
                      mx: "auto",
                    }}
                    size="small"
                    checked={reminder.checked}
                    onChange={handleChange}
                    onClick={() =>
                      handleReminderList(reminder.day, reminder.checked)
                    }
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default LearnerNavigation;
