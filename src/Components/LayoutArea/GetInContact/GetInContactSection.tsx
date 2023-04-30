import React from "react";
import "./GetInContactSection.css";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function GetInContactSection() {
  const { t } = useTranslation();

  return (
    <div className="GetInContactSection">
      <Box sx={{ p: 4, border: "3px dashed" }}>
        <div className="HighlightText">
          <h1>{t("GetInContactHomePage.interested")}</h1>
          <br />
          <p>{t("GetInContactHomePage.contactUsForQuestions")}</p>
          <br />
          <p>
            {t("GetInContactHomePage.phone")}{" "}
            <a className="LinkButton" href="tel:+972-54200000">
              {" "}
              +972-54200000{" "}
            </a>{" "}
          </p>
          <br />
          <p>{t("GetInContactHomePage.email")} example@gmail.com</p>
          <br />
          <p>
            {t("GetInContactHomePage.leaveYourDetails")}{" "}
            <NavLink className="LinkButton" to={"/contact-us"}>
              {" "}
              {t("GetInContactHomePage.here")}{" "}
            </NavLink>{" "}
            {t("GetInContactHomePage.contactAsSoonAsPossible")}
          </p>
        </div>
      </Box>
    </div>
  );
}

export default GetInContactSection;

// import React from "react";
// import "./GetInContactSection.css";
// import { Box, Grid } from "@mui/material";

// function GetInContactSection() {
//   return (
//     <div className="GetInContactSection">
//       <Box sx={{ p: 4, border: "3px dashed" }}>
//         <Grid container spacing={1}>

//           <Grid item sx={{ xs: 12, sm: 12, md: 12 }}>
//               <h1>Interested?, not sure?.</h1>
//           </Grid>

//           <Grid item sx={{ xs: 12, sm: 12, md: 12 }}>
//           <h2>Contact us for any questions we'll be happy to provide you with an answer.</h2>
//           </Grid>

//           <Grid item sx={{ xs: 12, sm: 12, md: 12 }}>
//           <h2>Phone: +972-54200000</h2>
//           </Grid>

//           <Grid item sx={{ xs: 12, sm: 12, md: 12 }}>
//           <h2>Email: example@gmail.com</h2>
//           </Grid>

//           <Grid item sx={{ xs: 12, sm: 12, md: 12 }}>
//           <h2>or leave your details here and we'll get in contact as soon as possible.</h2>
//           </Grid>

//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default GetInContactSection;
