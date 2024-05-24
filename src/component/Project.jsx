import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Project() {
  return (
   <>
   
   <Box sx={{width:'95%' ,    backgroundColor: "rgba(128, 128, 128, 0.54)", p:3, mx:'auto' , borderRadius:3}}>


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
    //   width:'95%' ,mx:"auto"
    }}
  >
    Project
  </Typography>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 4,
      py: 4,
    }}
  >
    <Box
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "270px",
        gap: "16px",
        borderRadius: "10px",
        color: "white",
        boxShadow: "black -2px 2px 12px",
        position: "relative",
        "&:hover .overlay": {
          transform: "scale(1)",
        },
      }}
    >
      <a href="">
        <img
          className="imageee"
          src="https://i.ibb.co/vZcTQVr/Screenshot-2024-05-16-162821.png"
          alt="Screenshot-2024-05-16-162821"
          border="0"
        />
      </a>
      <Box
        className="overlay"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(28, 21, 21, 0.61)",
          width: "100%",
          position: "absolute",
          transition: "all 0.25s ease-in 0s",
          height: "100%",
          transform: "scale(0)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            lineHeight: 1.167,
            letterSpacing: 0,
            color: "white",
            fontWeight: 600,
            textAlign: "center",

            padding: "10px",
          }}
        >
          Poll Management
        </Typography>
        It Is A Poll Management App Created By React JS. (CRUD Using
        API)
        <a
          style={{ textDecoration: "none" }}
          href="https://664c662fbe65c80505d6c1f0--incomparable-gecko-5185c2.netlify.app/"
        >
          <Button
            sx={{
              borderRadius: 4,
              px: 2,
              border: 1,
              my: 2,
              color: "white",
            }}
          >
            see more
          </Button>
        </a>
      </Box>
    </Box>
    <Box
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "270px",
        gap: "16px",
        borderRadius: "10px",
        color: "white",
        boxShadow: "black -2px 2px 12px",
        position: "relative",
        "&:hover .overlay": {
          transform: "scale(1)",
        },
      }}
    >
      <a href="">
        <img
        className="imageee"
          src="https://i.ibb.co/JcT7Zp9/Screenshot-2024-05-16-210451.png"
          alt="Screenshot-2024-05-16-210451"
          border="0"
        />
      </a>
      <Box
        className="overlay"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(28, 21, 21, 0.61)",
          width: "100%",
          position: "absolute",
          transition: "all 0.25s ease-in 0s",
          height: "100%",
          transform: "scale(0)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            lineHeight: 1.167,
            letterSpacing: 0,
            color: "white",
            fontWeight: 600,
            textAlign: "center",

            padding: "10px",
          }}
        >
          DASHBOARD WITH FIREBASE
        </Typography>
        This dashboard contain authentication like , OTP based
        authentication , mail password authentication , Google based
        authentication ,CRUD Operation with firebase store
        <a
          style={{ textDecoration: "none" }}
          href="https://664c78d7a41d9e00a8f52609--cerulean-centaur-c197a5.netlify.app/"
        >
          <Button
            sx={{
              borderRadius: 4,
              px: 2,
              border: 1,
              my: 2,
              color: "white",
            }}
          >
            see more
          </Button>
        </a>
      </Box>
    </Box>

    <Box
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "270px",
        gap: "16px",
        borderRadius: "10px",
        color: "white",
        boxShadow: "black -2px 2px 12px",
        position: "relative",
        "&:hover .overlay": {
          transform: "scale(1)",
        },
      }}
    >
      <a href="">
        <img
        className="imageee"
          src="https://i.ibb.co/PQ1bDgJ/Screenshot-2024-05-16-181002.png"
          alt="Screenshot-2024-05-16-181002"
          border="0"
        />
      </a>
      <br />
      <a target="_blank" href="">
        
      </a>
      <br />

      <Box
        className="overlay"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(28, 21, 21, 0.61)",
          width: "100%",
          position: "absolute",
          transition: "all 0.25s ease-in 0s",
          height: "100%",
          transform: "scale(0)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.7rem",
            lineHeight: 1.167,
            letterSpacing: 0,
            color: "white",
            fontWeight: 600,
            textAlign: "center",

            padding: "10px",
          }}
        >
          FIGMA DESIGNE WITH MUI
        </Typography>
        It Is A FIGMA DESIGNE Created By mui (this design will contain
        navbar , header section , main section , body section with cards
        , footer )
        <a
          style={{ textDecoration: "none" }}
          href="https://664c784c499ba90076d23d9e--comforting-concha-58827d.netlify.app/"
        >
          <Button
            sx={{
              borderRadius: 4,
              px: 2,
              border: 1,
              my: 2,
              color: "white",
            }}
          >
            see more
          </Button>
        </a>
      </Box>
    </Box>

    <Box
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "270px",
        gap: "16px",
        borderRadius: "10px",
        color: "white",
        boxShadow: "black -2px 2px 12px",
        position: "relative",
        "&:hover .overlay": {
          transform: "scale(1)",
        },
      }}
    >
      <a href="">
        <img
        className="imageee"
          src="https://i.ibb.co/47mpxz1/Screenshot-2024-05-21-151521.png"
          alt=""
          border="0"
        />
      </a>

      <Box
        className="overlay"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(28, 21, 21, 0.61)",
          width: "100%",
          position: "absolute",
          transition: "all 0.25s ease-in 0s",
          height: "100%",
          transform: "scale(0)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            lineHeight: 1.167,
            letterSpacing: 0,
            color: "white",
            fontWeight: 600,
            textAlign: "center",

            padding: "10px",
          }}
        >
          AlignX
        </Typography>
        AlignX Is A Client Project. I Have Handle All Frontend
        Functionality Using React JS.
        <a
          style={{ textDecoration: "none" }}
          href="https://alignxupdated.netlify.app/"
        >
          <Button
            sx={{
              borderRadius: 4,
              px: 2,
              border: 1,
              my: 2,
              color: "white",
            }}
          >
            see more
          </Button>
        </a>
      </Box>
    </Box>
  </Box>
</Box>
   </>
  )
}

export default Project