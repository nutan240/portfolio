import { Box, Typography } from '@mui/material'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

function Typewriter() {
  return (
    <

    >
    <Box
        display="flex"
        flexDirection="column"
        maxWidth="1250px"
        mx={"auto"}
        width={"full"}
        
        sx={{
        //   bgcolor: "#fff",
          paddingTop: { xs: "10px", md: "50px" }, mt:8 ,
          mb:4
        }}
      >
 <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: { xs: "90%", md: "90%" },
              fontSize: { xs: "30px", md: "44px" },
              fontFamily: "Urbanist",
              fontWeight: "700",
              color: "white",
              margin: "auto",
              paddingTop: { xs: "10px", md: "20px" },
            //   pb:3 , fontFamily:"sans-serif" , 
              fontStyle:'italic'

            }}
          >
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "My self Nutan Kumari,",
                  "I'm a passionate Frontend React.js Developer with a BTech in Computer Science.",
                  "I blend creativity with technical expertise to deliver seamless web experiences. ",
                  "Proficient in crafting responsive, user-friendly interfaces," ,
                  "Eager to contribute innovative solutions to drive user engagement and elevate digital platforms."
                ],
              }}
            />
          </Typography>


      </Box>
    </>
  )
}

export default Typewriter