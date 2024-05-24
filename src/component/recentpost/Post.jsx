import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../image copy/mainimg.png"

function Post() {
  return (
    <>
      <Box>
        <Box sx={{ background: "#EDF7FA" ,p:5 }}>
            <Box sx={{display:'flex',justifyContent:"space-between" , width:'90%', mx:"auto"}}>
          <Typography
            sx={{ fontSize: "30px", fontFamily: "sans-serif", color: "21243D" , py:2 }}
          >
            {" "}
            Recent posts
          </Typography>
          <NavLink style={{
    textDecoration: "none",
    color: "orange",
    fontFamily: "sans-serif",
    fontSize: "20px",
    padding: "8px 0", // Adjust padding as needed
    display: "inline-block", fontWeight:'bold' }} to={"/works"}>
          <Typography
            sx={{ fontSize: "20px", fontFamily: "sans-serif", color: "21243D" , py:2 , textDecoration:'none' , fontWeight:'bold' }}
               >
           
            View All..
          </Typography>
          </NavLink>
         
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            //   width: "95%",
              mx: "auto",
              justifyContent: "center",
              gap: "7%",
              background: "#EDF7FA",
            }}
          >
            <Box sx={{width:{lg:'40%' , sm:'45%' , xs:"100%"}, border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , mb:2}}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
                }}
              >
                Making a PMS(Poll Management App){" "}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontFamily: "sans-serif" , width:{lg:'400px' , md:"300px " , sm:'120px'}, wordBreak:"break-all"}}>
                https://github.com/nutan240/poll_manageme nt/tree/poll-app
              </Typography>
              <Box sx={{ display: "flex", gap: 2, py: 1 }}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  pt: 2,
                  color: "gray",
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
            </Box>


            <Box sx={{width:{lg:'40%' , sm:'46%' , xs:"100%"} , border:1 , p:2, borderColor:'#80808045' , borderRadius:4 , mb:2}}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: "#17054fe0",
                  letterSpacing: 1,
                }}
              >
              FIGMA DESIGNE WITH MUI  
              </Typography>
          
              <Box sx={{ display: "flex", gap: 2, py: 2 }}>
                <Typography sx={{ borderRight: 1, px: 2 }}>
                  10 March 2024{" "}
                </Typography>
                <Typography>Design & Logic </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  px: 4,
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

          </Box>
        </Box>

      </Box>
      <Box sx={{ 
         backgroundImage: ` url( ${image} )`,
  
      width: "100%",
      overflow : 'auto' , 
      backgroundRepeat:'no-repeat', 
      height:{lg:'auto' ,md:'300px', sm:'420px', xs:'450px'}
     
    }}>

<Box sx={{display:"flex" , justifyContent:'center' , gap:3 , width:'100%' , flexWrap:'wrap'}}>

<Box sx={{width:'300px' , p:5 , textAlign:"center" , border:1 , borderColor:"white" , ":hover":{background:"#28165b"} , height:'auto' , my:6}}>
<img src={('https://preview.colorlib.com/theme/busicol/img/svg_icon/controls.svg')} style={{width:"65px",height:"62px" ,  justifyContent:'center' , textAlign:'center' , alignItems:'center' , margin:'auto'}}/>
  <Typography sx={{fontWeight:'bold' , color:'white'  , fontSize:'25px' , fontFamily:'sans-serif' , py:2}}> Unlimited Control</Typography>
  <Typography sx={{ color:'white'  , fontSize:'20px' , fontFamily:'sans-serif'}}> hese cases are perfectly simple and easy to</Typography>
</Box>

<Box sx={{width:'300px' , p:5 , textAlign:"center" , border:1 , borderColor:"white" , ":hover":{background:"#28165b"} ,height:'auto' , my:6}}>
<img src={('https://preview.colorlib.com/theme/busicol/img/svg_icon/bar-chart.svg')} style={{width:"65px",height:"62px" , display:"flex", justifyContent:'center' , textAlign:'center' , alignItems:'center' , margin:'auto'}}/>
  <Typography sx={{fontWeight:'bold' , color:'white'  , fontSize:'25px' , fontFamily:'sans-serif' , py:2}}> Rapidly Growth</Typography>
  <Typography sx={{ color:'white'  , fontSize:'20px' , fontFamily:'sans-serif'}}> hese cases are perfectly simple and easy to</Typography>
</Box>

<Box sx={{width:'300px' , p:5 , textAlign:"center" , border:1 , borderColor:"white" , ":hover":{background:"#28165b"} , height:'auto' , my:6}}>
<img src={('https://preview.colorlib.com/theme/busicol/img/svg_icon/puzzle.svg')} style={{width:"65px",height:"62px" , display:"flex", justifyContent:'center' , textAlign:'center' , alignItems:'center' , margin:'auto'}}/>
  <Typography sx={{fontWeight:'bold' , color:'white'  , fontSize:'25px' , fontFamily:'sans-serif' , py:2}}> Problem Solving</Typography>
  <Typography sx={{ color:'white'  , fontSize:'20px' , fontFamily:'sans-serif'}}> hese cases are perfectly simple and easy to</Typography>
</Box>
</Box>

    </Box>
    </>
  );
}

export default Post;
