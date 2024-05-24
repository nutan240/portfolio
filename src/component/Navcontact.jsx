import React from 'react'
import Navbar from '../pages/Navbar'

import Footer from './footer/Footer'
import Contact from '../pages/selfinfo/Contact'
import { Box } from '@mui/material'

function Navcontact() {
  return (
   <>
 <Box sx={{background:"#332364"}}>
    <Navbar/>
 <Box sx={{mt:10  , px:3 ,py:10}}>
 <Contact/>
 </Box>
  <Box sx={{background:'#28165b' , mb:0 ,  }}>
  <Footer/>
  </Box>
  </Box>   



   
   </>
  )
}

export default Navcontact