import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
    <Box>
   
    <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: 2,
                    borderBottom:1,
                    borderColor:'white',
                    // borderWidth:'70%'
                    width:'60%',
                    margin:'auto' , 
                    py:1

                  }}
                >
                  <Box>
                    <FaFacebookSquare
                      style={{ height: "55px", width: "35px", color: "white" }}
                    />
                  </Box>
                  <Box>
                    <FaLinkedin
                      style={{ height: "53px", width: "35px", color: "white" }}
                    />
                  </Box>
                  {/* <Box>
                    <TiSocialTwitter
                      style={{ height: "55px", width: "35px", color: "white" }}
                    />
                  </Box> */}
                  <Box>
                    <FaInstagram
                      style={{ height: "55px", width: "35px", color: "white" }}
                    />
                  </Box>

                  <Box>
                    <FaYoutube
                      style={{ height: "59px", width: "36px", color: "white" }}
                    />
                  </Box>
                </Box>
                <Box sx={{fontSize:"17px" , fontFamily:'sans-serif' , color:'white' , py:2 , textAlign:'center'}}>Copyright ©2024 All rights reserved </Box>
                </Box>
    </>
  )
}

export default Footer