import { Box, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";

function Exp() {
  return (
    <>
      <Box>
        <Box>
          <Stack
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
                // backgroundColor: "rgba(45, 28, 42, 0.76)",
                background: "rgba(43, 34, 52, 0.75)",
                padding: "10px",
              }}
            >
              Experience
            </Typography>

            
            <Box sx={{  borderRadius:4 , my:2 , border:1}}  >
            <Typography
              sx={{
                margin: 0,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "1.5rem",
                lineHeight: 1.334,
                letterSpacing: 0,
                fontWeight: 600,
                padding: "10px",
                textAlign: "center",
                // background: "rgba(43, 34, 52, 0.75)",
                backgroundColor: "rgba(45, 28, 42, 0.76)",
                m: 2,
              }}
            >
              CETPA
            </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  // backgroundColor: "rgba(35, 18, 42, 0.76)",

                  borderRadius: "4px",
                  m: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: 1.334,
                    letterSpacing: 0,
                    fontWeight: 600,
                    padding: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    // background: 'rgb(251 0 255 / 8%)',
                    // my: 2,
                  }}
                >
                  Web Designing
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: 1.334,
                    letterSpacing: 0,
                    fontWeight: 600,
                    padding: "10px",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    textAlign: "center",
                    // background: 'rgba(43, 34, 52, 0.75)',
                  }}
                >
                  (july-2022 - dec-2023)
                </Typography>
              </Box>
              <Box sx={{m:2 ,  backgroundColor: "rgba(128, 128, 128, 0.34)",   p:2}}>
                I have successfully completed 6 month Web Designing Certificate
                program at CETPA Noida Sector 2 Branch, earning a Certificate
                ID: ETDipl372036M5319612
                signifies my proficiency in web design principles, front-end
                development, and user experience (UX) design. Throughout the
                program, I acquired practical skills in HTML, CSS, JavaScript,
                 Bootstrap, and responsive
                web design techniques. I also gained expertise in creating
                visually appealing and user-friendly websites. This certificate
                demonstrates my ability to craft engaging web interfaces,
                enhance user experiences, and effectively transform design
                concepts into functional websites. I look forward to applying
                these skills in contributing to dynamic web projects and
                delivering seamless online experiences for users.
              </Box>
            </Box>


            <Box sx={{  borderRadius:4 , my:2 , border:1}}  >
            <Typography
              sx={{
                margin: 0,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "1.5rem",
                lineHeight: 1.334,
                letterSpacing: 0,
                fontWeight: 600,
                padding: "10px",
                textAlign: "center",
                // background: "rgba(43, 34, 52, 0.75)",
                backgroundColor: "rgba(45, 28, 42, 0.76)",
                m: 2,
              }}
            >
            Excellence Technology Pvt. Ltd.
            </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  // backgroundColor: "rgba(35, 18, 42, 0.76)",

                  borderRadius: "4px",
                  m: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: 1.334,
                    letterSpacing: 0,
                    fontWeight: 600,
                    padding: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    // background: 'rgb(251 0 255 / 8%)',
                    // my: 2,
                  }}
                >
                JR. React JS Developer
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: 1.334,
                    letterSpacing: 0,
                    fontWeight: 600,
                    padding: "10px",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    textAlign: "center",
                    // background: 'rgba(43, 34, 52, 0.75)',
                  }}
                >
                 (Nov-2023 - april-2024)
                </Typography>
              </Box>
              <Box sx={{m:2 ,  backgroundColor: "rgba(128, 128, 128, 0.34)",   p:2}}>
              Excellence Technology Pvt. Ltd. is a versatile technology company that delves into various technologies, including Python, React.js, Node.js, Vue.js, Next.js, Ruby on Rails (ROR), Angular, and more. During my tenure at Excellence Technology, I accumulated 5 months of experience primarily focused on React.js, Next.js, Tailwind CSS, Material-UI (MUI), and Bootstrap. As a frontend developer in this company, I contributed to the design and development of client projects, ensuring the delivery of high-quality and efficient solutions tailored to their requirements. My responsibilities also extended to collaborating with design teams to create visually appealing user interfaces that enhance user experience and engagement. 
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Exp;
