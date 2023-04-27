import React from "react";
import "./Clients.css";
import clientDataModel from "../../Models/clientDataModel";
import { Box, Grid } from "@mui/material";

interface Clients {
  client: clientDataModel[];
}

function Clients(props: Clients) {
  return (
    <div className="Clients">
      <h1>our clients</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent={"center"} className="ClientsLogoPaddingTop">
          {props.client.map((e, index) => (
            <Grid item xs={2} md={1} lg={1} key={index}>
              <img className="ClientsLogo" src={e.icon} alt={e.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Clients;
