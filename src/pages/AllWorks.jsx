import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import image1 from "../image copy/fimg5.png"
import image2 from "../image copy/fire4.png"
import image3 from "../image copy/fire3.png"
import image6 from "../image copy/dashboard.png"
import Footer from '../component/footer/Footer'
import '../pages/selfinfo/allwork.css'


function AllWorks() {
  return (
  <>
  <Box sx={{background:"#edf7fa"}}>



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
{/* 
  <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
             
                p:3
                }}
              >
                WORK
              </Typography> */}

    <Box sx={{width:'95%%' ,  
    
    // px:{lg:8 , sm:6 , sx:2 }
    }}>
   
    <Box
            sx={{
             
              flexWrap: "wrap",
              width: "95%",
              mx: "auto",
              justifyContent: "center",
             
              
            }}
          >
            <Box sx={{width:{lg:'100%' , sm:'100%' , xs:"100%"}, border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , m:2 , 
            
            
            // backgroundColor: "rgba(128, 128, 128, 0.54)",
              mx:'auto' ,
              }}>
              <Typography
                sx={{
                  fontSize: {lg:"40px" , sm:"30px" , xs:'20px'},
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
                  textAlign:'center'
                }}
              >
                Making a PMS(Poll Management App){" "}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontFamily: "sans-serif" , wordBreak:"break-all" , textAlign:'center'}}>
                https://github.com/nutan240/poll_manageme nt/tree/poll-app
              </Typography>
             
              <Box>
                <Box  sx={{display:"flex" , flexWrap:'wrap' , justifyContent:'center' , gap:2 ,py:4}}>
                    <Box>
                    <a href=""><img className='imageee2' src="https://i.ibb.co/vZcTQVr/Screenshot-2024-05-16-162821.png" alt="Screenshot-2024-05-16-162821" border="0"/></a>
                    </Box>
                    <Box>
                    <a href=""><img className='imageee2'  src="https://i.ibb.co/x7HjJmX/Screenshot-2024-05-16-163021.png" alt="Screenshot-2024-05-16-163021" border="0"/></a>
                    </Box>
                    {/* <Box>
                    <img src={('public/pedit.png')} style={{width:"300px",height:"300px" , borderRadius:"20px"}}/>
                    </Box>
                    <Box>
                    <img src={('public/pdetils.png')} style={{width:"300px",height:"300px" , borderRadius:"20px"}}/>
                    </Box> */}
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  pt: 2,
                  color: "gray",
                  px:{lg:9 , sm:6 , xs:2}
                }}
              >
                In Polling App first there will be registration page where user
                can register and set the role , role can be either admin or user
                , in login page user can login and login based on role based ,
                If the role will be user then it will navigate to user dashboard
                , if the role will be admin then navigate to admin dashboard. In
                admin dashboard admin will add poll (question) , edit and delete
                the poll’s . In the user dashboard user can only see the poll
                and gave the vote.{" "}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, py: 1 , px:{lg:9 , sm:6 , xs:2} }}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>
            </Box>

            <Box sx={{width:{lg:'100%' , sm:'100%' , xs:"100%"} , border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , mb:2}}>
              <Typography
                sx={{
                  fontSize: {lg:"40px" , sm:"30px" , xs:'20px'},
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#17054fe0",
                    letterSpacing: 1,
                    textAlign:'center'
                }}
              >
              FIGMA DESIGNE WITH MUI  
              </Typography>


              <Box>
                <Box  sx={{display:"flex" , flexWrap:'wrap' , justifyContent:'center' , gap:4 ,py:4}}>
                    <Box sx={{height:'400px', width:'100%' ,  backgroundImage: ` url( ${image1} )`,}}>
                    
                    </Box>
                    {/* <Box sx={{height:'300px', width:'300px' ,  backgroundImage: ` url( ${image2} )`,}}>
                  
                    </Box>
                    <Box sx={{height:'300px', width:'300px' ,  backgroundImage: ` url( ${image3} )`,}}>
                   
                    </Box> */}
                    
                </Box>
              </Box>
          
              <Box sx={{ display: "flex", gap: 2, py: 2 , px:7}}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  px: 9,
                  color: "gray",
                }}
              ><li>
                 this design will contain navbar 
                
              </li>
              <li>
              header section  
                
              </li>
              <li>
              main section 
                
              </li>
              <li>
              body section with cards    
                
              </li>
              <li>
              footer 
                
              </li>
              
              </Typography>
            </Box>




            <Box sx={{width:{lg:'100%' , sm:'100%' , xs:"100%"}, border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , mb:2 , }}>
              <Typography
                sx={{
                  fontSize: {lg:"40px" , sm:"30px" , xs:'20px'},
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
                  textAlign:'center'
                }}
              >
                MAKING DASHBOARD WITH FIREBASE   
              </Typography>
              <Typography sx={{ fontSize: "14px", fontFamily: "sans-serif" , wordBreak:"break-all" , textAlign:'center'}}>
              https://github.com/nutan240/firebase/tree/fire-base
              </Typography>
             
              <Box>
                <Box  sx={{display:"flex" , flexWrap:'wrap' , justifyContent:'center' , gap:4 ,py:4}}>
                <Box sx={{height:'200px', width:'40%' ,  backgroundImage: ` url( ${image2} )`,}}>
                    </Box>
                    <Box sx={{height:'200px', width:'40%' ,  backgroundImage: ` url( ${image3} )`, backgroundPosition:'center'}}>
                    </Box>
                  
                </Box>
              </Box>
              
              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  px:{lg:9 , sm:6 , xs:2},
                  color: "gray",
                }}
              >
<Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
                  // textAlign:'center'
                }}
              >
               This dashboard contain authentication like    
              </Typography>

              <li>
              OTP based authentication   
                
              </li>
              <li>
              mail password authentication   
                
              </li>
              <li>
              Google based authentication This will also 
contain:     
                
              </li>
              <li>
              CRUD Operation with firebase store
                
              </li>
              </Typography>
              <Box sx={{ display: "flex", gap: 2, py: 1 ,  px:{lg:9 , sm:6 , xs:2} }}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>
            </Box>

          
            <Box sx={{width:{lg:'100%' , sm:'100%' , xs:"100%"} , border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , mb:2}}>
              <Typography
                sx={{
                  fontSize: {lg:"40px" , sm:"30px" , xs:'20px'},
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#17054fe0",
                    letterSpacing: 1,
                    textAlign:'center'
                }}
              >
              DASBOARD WITH MUI  
              </Typography>

              <Typography sx={{ fontSize: "14px", fontFamily: "sans-serif" , wordBreak:"break-all" , textAlign:'center'}}>
              https://github.com/nutan240/firebase/tree/fire-base
              </Typography>
              <Box>
                <Box  sx={{display:"flex" , flexWrap:'wrap' , justifyContent:'center' , gap:4 ,py:4}}>
                    {/* <Box sx={{height:'500px', width:'90%' ,  backgroundImage: ` url( ${image6} )`,}}>
                    
                    </Box> */}
                    {/* <Box sx={{height:'300px', width:'300px' ,  backgroundImage: ` url( ${image2} )`,}}>
                  
                    </Box>
                    <Box sx={{height:'300px', width:'300px' ,  backgroundImage: ` url( ${image3} )`,}}>
                   
                    </Box> */}
                    
                </Box>
              </Box>
          
              <Box sx={{ display: "flex", gap: 2, py: 2 ,  px:{lg:9 , sm:6 , xs:2}}}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  px:{lg:9 , sm:6 , xs:2},
                  color: "gray",
                }}
              ><li>
                 this design will contain navbar 
                
              </li>
              <li>
              Sidebar drawer
                
              </li>
              <li>
             about
                
              </li>
              <li>
              body section with cards    
                
              </li>
              <li>
             product
                
              </li>
              
              </Typography>
            </Box>

          </Box>
    </Box>
  </Box>
  <Box sx={{background:'#1584b4'}}>
  <Footer/>
  </Box>
 
  </>
  )
}

export default AllWorks