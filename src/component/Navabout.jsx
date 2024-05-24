import React from 'react'
import Navbar from '../pages/Navbar'
import About from './About'
import Footer from './footer/Footer'
import { Box } from '@mui/material'

function Navabout() {
  return (
    <>
    <Box sx={{background:"#332364"}}>
    <Navbar/>
 <Box sx={{mt:10  , px:3 ,py:10}}>
 <About/>
 </Box>
  <Box sx={{background:'#28165b' , mb:0 ,  }}>
  <Footer/>
  </Box>
  </Box>
    </>
  )
}

export default Navabout