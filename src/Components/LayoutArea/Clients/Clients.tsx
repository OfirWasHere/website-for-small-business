import React from "react";
import "./Clients.css";
import clientDataModel from "../../Models/clientDataModel";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Clients {
  client: clientDataModel[];
}

function Clients(props: Clients) {
  const { t } = useTranslation();

  return (
    <div className="Clients">
      <h1>{t("ClientString")}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent={"center"}>
          {props.client.map((e, index) => (
            <Grid item xs={4} md={2} lg={1} key={index}>
              <img className="ClientsLogo" src={e.icon} alt={e.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Clients;
