import React from "react";
import "./Goals.css";
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
import { useTranslation } from "react-i18next";

interface AboutProps {
  about: AboutCardModel[];
}

function About(props: AboutProps) {
  const { t } = useTranslation();
  return (
    <div className="About">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          {props.about.map((e, index) => (
            <Grid item xs={12} md={4} lg={4} className="Card" key={index}>
              <Card
                sx={{ maxWidth: window.innerWidth >= 1500 ? "95%" : "100%" }}
              >
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
                      <h2>{t(e.title)}</h2>
                    </Typography>
                    {/* Card Description */}
                    <Typography variant="body2" color="text.secondary">
                      {t(e.description)}
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