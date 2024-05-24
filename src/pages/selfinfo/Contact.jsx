import { Box, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
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
        Contact Me
      </Typography>

      <Box sx={{ 
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '24px',
  paddingTop: '40px',
  paddingBottom: '40px',
}} >
    <Box sx={{ 
  overflow: 'hidden',
  padding: '20px',
  borderRadius: '10px',
  color: 'white',
  boxShadow: 'black -2px 2px 12px',
  backgroundColor: 'rgba(28, 21, 21, 0.61)',
  transition: 'all 0.2s ease-in 0s',
  width:{lg:'500px' , md:'300px' , sm :"100%" , xs:'100%'}

}}>
        nutananju240@gmail.com
      </Box>
      <Box sx={{ 
  overflow: 'hidden',
  padding: '20px',
  borderRadius: '10px',
  color: 'white',
  boxShadow: 'black -2px 2px 12px',
  backgroundColor: 'rgba(28, 21, 21, 0.61)',
  transition: 'all 0.2s ease-in 0s',
  width:{lg:'500px' , md:'300px' , sm :"100%" , xs:'100%'}
}}>
        +91 7258923956
      </Box>
    </Box>
    <Box sx={{ 
  overflow: 'hidden',
  padding: '20px',
  borderRadius: '10px',
  color: 'white',
  boxShadow: 'black -2px 2px 12px',
  backgroundColor: 'rgba(28, 21, 21, 0.61)',
  transition: 'all 0.2s ease-in 0s',
  width:{lg:'500px' , md:'300px' , sm :"100%" , xs:'100%'} , textAlign:'center'
, mx:"auto"
}}>
        New Ashok Nagar,Delhi (110096)
      </Box>
    </Box>

   
  </Box>
  )
}

export default Contact