import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../Assets/ArtGalleryimg1.jpg";
import img2 from "../Assets/ArtGalleryimg2.jpg";
import img3 from "../Assets/ArtGalleryimg3.jpg";
import img4 from "../Assets/Ellipseartist.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const images = [
  {
    title:
      " “L'arte non ha epoca. E' l'emozione che dorme su guanciali d'eternità.” ",
    url: img1,
  },
  { title: " “All'opera si conosce il maestro.” ", url: img2 },
  {
    title: " “L'arte è fatta per disturbare, la scienza per rassicurare.” ",
    url: img3,
  },
];

export const Home = () => {
  return (
    <Stack spacing={3} style={{ height: "80vh" }}>
      <Slide
        autoplay={true}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        {images.map((img) => (
          <div key={img.title} className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${img.url})`, backgroundSize: 'cover'
              }}
            >
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </Slide>
      {/* web */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Grid container spacing={2} direction={"row"} className="row-img">
      <Grid item lg={4}>
           <img src={img1} alt="img" />
         </Grid>
         <Grid item container direction={'column'} lg={3} >
           
           <Grid item  md={4}> 
             <span>
               <Typography component={'i'} variant="h3">For the Clients  </Typography>
               <Typography component={'i'} variant="body1">Description</Typography>
             </span>
           </Grid>

             <Grid item container direction={"row"}>
               <Grid item md={6}>
                 <Button component="label" variant="text" style={{color:'white'}} startIcon={<KeyboardDoubleArrowLeftIcon />}> Log In</Button>
               </Grid> 
                 <Grid item  md={6}>
                 <Button component="label"  variant="text" style={{color:'white'}} endIcon={<KeyboardDoubleArrowRightIcon />}>Sign In</Button>
                 </Grid>  
             </Grid>
         </Grid>
       
       </Grid>
        <Grid container spacing={2} direction={"row"} className="row-img">
         
          <Grid item container direction={'column'} lg={3} >
            
            <Grid item  md={4}> 
              <span>
                <Typography component={'i'} variant="h3">For Promoters </Typography>
                <Typography component={'i'} variant="body1">Description</Typography>
              </span>
            </Grid>

              <Grid item container direction={"row"}>
                <Grid item md={6}>
                  <Button component="label" variant="text" style={{color:'white'}} startIcon={<KeyboardDoubleArrowLeftIcon />}> Log In</Button>
                </Grid> 
                  <Grid item  md={6}>
                  <Button component="label"  variant="text" style={{color:'white'}} endIcon={<KeyboardDoubleArrowRightIcon />}>Sign In</Button>
                  </Grid>  
              </Grid>
          </Grid>
          <Grid item lg={4}>
            <img src={img2} alt="img" />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction={"row"} className="row-img">
          <Grid item lg={4}>
            <img src={img3} alt="img" />
          </Grid>
          <Grid item lg={7}>
            <span>For Everyone</span>
          </Grid>{" "}
        </Grid>
      </Box>

      {/* mobile */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid item xs={7} style={{ background: `url(${img1})` , height:'10rem', backgroundSize: 'cover'}}>
           
          </Grid>
          <Grid item xs={4}>
          <span>
              <Typography component={"i"} variant={"h6"}>
                For Clients
              </Typography>
            </span>
          </Grid>{" "}
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
       
          <Grid item xs={4}>   <span>
              <Typography component={"i"} variant={"h6"}>
                For Promoters
              </Typography>
            </span></Grid>
          <Grid item xs={7} style={{ background: `url(${img2})` , height:'10rem', backgroundSize: 'cover'}}>
         
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid item xs={7} style={{ background: `url(${img3})` ,height:'10rem', backgroundSize: 'cover'}}>
         
          </Grid>
          <Grid item xs={4}>   <span>
              <Typography component={"i"} variant={"h6"}>
                For Everyone
              </Typography>
            </span></Grid>{" "}
        </Grid>
      </Box>
    </Stack>
  );
};
