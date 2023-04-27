import React from "react";
import "./About.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AboutCardModel from "../../Models/cardModel";

interface AboutProps {
  about: AboutCardModel[];
}

function About(props: AboutProps) {
  return (
    <div className="About">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {props.about.map((e, index) => (
            <Grid item xs={12} md={4} lg={4} className="Card" key={index}>
              <Card sx={{ maxWidth: window.innerWidth >= 1500 ? "90%" : "100%" }}>
                <CardActionArea>
                    {/* Card Media */}
                  <CardMedia
                    component="img"
                    height="250"
                    image={e.image}
                    alt={e.imageDesc}
                  />
                  <CardContent>
                    {/* Card Title */}
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title}
                    </Typography>
                    {/* Card Description */}
                    <Typography variant="body2" color="text.secondary">
                      {e.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default About;


// Remember our clients etc...
// Meow~~







{/* <Card sx={{ maxWidth: 345 }}> */}








// import React from "react";
// import "./About.css";
// import { Box, Grid } from "@mui/material";

// function About() {
//   return (
//     <div className="About">
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={4} lg={4} className="Card">
//             <h1>Your Time is important to us!</h1>
//           </Grid>
//           <Grid item xs={12} md={4} lg={4} className="Card">
//             <h1>We Value Our Customers</h1>
//           </Grid>
//           <Grid item xs={12} md={4} lg={4} className="Card">
//             <h1>we will do our best to meet your expectations</h1>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }



// <Card sx={{ maxWidth: 345 }}>
// <CardActionArea>
//   <CardMedia
//     component="img"
//     height="140"
//     image={""}
//     alt="clock image"
//   />
//   <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//       Your Time is important to us!
//     </Typography>
//     {/* Card bottom */}
//     <Typography variant="body2" color="text.secondary">

//       Lizards are a widespread group of squamate reptiles, with
//       over 6,000 species, ranging across all continents except
//       Antarctica
//     </Typography>
//   </CardContent>
// </CardActionArea>
// </Card>














// export default About;

// // Remember our clients etc...
// // Meow~~
