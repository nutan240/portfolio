import { Box, Typography } from '@mui/material'
import React from 'react'

function Skills() {
  return (
   <>
   <Box sx={{background:'' ,py:3 , mb:2}}>
    <Box sx={{width:'90%' , mx:'auto' , background:'#28165b' , py:4 , borderRadius:4 }}>

    <Typography sx={{fontSize:"30px" , fontFamily:'sans-serif' , color:'white' , fontWeight:'bold' , borderBottom:'1px solid  white' , width:'160px' , textAlign:'center', mx:'auto' , mb:2}}>My <span style={{fontSize:"30px" , color:"#ec7c4d" ,  letterSpacing:4 , fontFamily:'sans-serif' , }}>Skills</span> </Typography>
    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' , alignItems:'baseline', pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>HTML-5</Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:4}}>
        <Typography sx={{width:'83%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>80%</Typography>
        </Box>
        
    </Box>
    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' , alignItems:'baseline',pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>CSS</Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:8}}>
        <Typography sx={{width:'90%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>88%</Typography>
        </Box>
        
    </Box>

    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' ,  alignItems:'baseline' ,pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>Bootstrap</Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:4}}>
        <Typography sx={{width:'55%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>50%</Typography>
        </Box>
        
    </Box>

    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' ,  alignItems:'baseline' , pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>JavaScript</Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:3}}>
        <Typography sx={{width:'63%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>60%</Typography>
        </Box>
        
    </Box>

    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' ,  alignItems:'baseline' , pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>React JS </Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:4}}>
        <Typography sx={{width:'83%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>80%</Typography>
        </Box>
        
    </Box>

    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' ,  alignItems:'baseline' , pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>MUI </Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3 , ml:8}}>
        <Typography sx={{width:'89%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>90%</Typography>
        </Box>
        
    </Box>

    <Box>
        <Box sx={{display:'flex' , gap:4 , justifyContent:'center' ,  alignItems:'baseline' , pb:1}}>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>Tailwind CSS  </Typography>
        <Box  sx={{width:'70%' , background:'white' , height:'12px' , borderRadius:3}}>
        <Typography sx={{width:'60%' , background:'#ec7c4d' , height:'12px' , borderRadius:3}}></Typography>
        </Box>
        <Typography sx={{color:"white" , fontStyle:'italic'}}>60%</Typography>
        </Box>
        
    </Box>
    </Box>
   </Box>
   <Box sx={{height:"3px" , background:'white' , width:'100%'}}></Box>
   </>
  )
}

export default Skills