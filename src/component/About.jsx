import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box
          sx={{
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: "4px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            overflow: "hidden",
            color: "white",
            backgroundColor: "rgba(128, 128, 128, 0.54)",
            padding: "20px",
            width: "95%",
            mx: "auto",
            my: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              lineHeight: 1.167,
              letterSpacing: 0,
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              backgroundColor: "rgba(45, 28, 42, 0.76)",
              padding: "10px",
            }}
          >
            About
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
              textAlign: "justify",
              color: "white",
              my: 3,
              fontFamily: "sans-serif",
              mx: 2,
              ":hover": {},
            }}
          >
            My educational background includes scoring 80% in 10th grade from
            Sacred Heart School and i have completed diploma in Computer scirnce
            Engineering , scored 80% from goverment womens polytechnic TATA
            nagar . Currently, I am B tech Passout student in Computer Science
            at UCET- Vinoba Bhave University, Hazaribag, Jharkhand , graduate in
            2023 , scored 82%. I am enthusiastic about applying my knowledge and
            expertise to contribute to dynamic web projects and deliver seamless
            online experiences for users.
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
              textAlign: "justify",
              color: "white",
              fontFamily: "sans-serif",
              mx: 2,
              ":hover": {},
            }}
          >
            I have successfully completed the Web Designing Certificate program
            at CETPA Noida, Sector 2 Branch,. This certification authenticates
            my proficiency in web design principles, front-end development, and
            UX design. Eager to leverage these skills, I've gained 6 months of
            experience as a React.js Developer at Excellence Technology Pvt Ltd.
          </Typography>
        </Box>

       
      </Box>
    </>
  );
}

export default About;
