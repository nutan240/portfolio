import React from 'react'
import Navbar from '../pages/Navbar'
import Info from '../pages/selfinfo/Info'
import { Box } from '@mui/material'
import Footer from './footer/Footer'
import Post from './recentpost/Post'
import Skills from './skils/Skills'
import Typewriter from './Typewriter/Typewriter'
import Exp from '../pages/experince/Exp'
import About from './About'
import Project from './Project'
import Contact from '../pages/selfinfo/Contact'

function MainApp() {
  return (
    <>
    <Box sx={{background:'#17054fe0' }}>
    <Navbar/>
    <Typewriter/>
    <Info/>
    <About/>
    
    <Exp/>
    <Project/>
    <Contact/>
    <Post/>
    <Skills/>
    
    <Footer/>
    </Box>
  
    </>
  )
}

export default MainApp