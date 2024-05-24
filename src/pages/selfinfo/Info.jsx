import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Info() {
  return (
   <>
   <Box sx={{display:"flex" ,mt:9 , flexWrap:"wrap" ,  width:"95%" , mx:'auto' , justifyContent:"center" , gap:'10%' ,background:'#17054f6b'}}>
    <Box sx={{my:2 , alignItems:'center' , py:{lg:7, md:1, sm:1  ,xs:1} ,width:{lg:"40%" ,md:"40%" , sm:"60%"}}}>
        <Typography sx={{width:"300px" , fontSize:"30px" , fontWeight:"bold" , fontFamily:"sans-serif", color:"#ec7c4d" , letterSpacing:4}}>Hi, It's me</Typography>
        <Typography sx={{width:"300px" , fontSize:"30px" , fontWeight:"bold" , fontFamily:"sans-serif" , letterSpacing:2 , color:'white' ,textDecoration:'underline' , pb:2}}> NUTAN KUMARI</Typography>
        <Typography sx={{fontSize:"30px" , fontFamily:'sans-serif' , color:'white'}}>And I'm a  <span style={{fontSize:"30px" , color:"#ec7c4d" ,  letterSpacing:4 , fontFamily:'sans-serif'}}>Frontend Developer</span> </Typography>
        <Typography sx={{fontSize:"17px" , fontFamily:'sans-serif' , color:'white' , pt:2}}>Seeking a challenging position to work in an environment where I can grow and also contribute to the company growth using my excellent web development and problem solving coding skills </Typography>
        <Button sx={{background:" #ec7c4d" , color:"white" , px:3 , my:2}}> Download Resume</Button>
    </Box>
    <Box sx={{my:3}}>
    {/* <img src={('public/pro.png')} style={{width:"300px",height:"300px" , borderRadius:"700px"}}/> */}
    <a href=""><img  style={{width:"300px",height:"300px" , borderRadius:"700px"}} src="https://i.ibb.co/rknsHBK/Screenshot-2024-05-15-222859.png" alt="Screenshot-2024-05-15-222859" border="0"/></a>
    </Box>
   </Box>
   </>

  )
}

export default Info