import React from 'react'
import Navbar from '../pages/Navbar'
import AllWorks from '../pages/AllWorks'
import Footer from './footer/Footer'
import { Box } from '@mui/material'

function Navproject() {
  return (
    <>

<Navbar/>
 <Box sx={{mt:10 , height:'70vh'}}>
 <AllWorks/>
 </Box>
 
   
    </>
  )
}

export default Navproject