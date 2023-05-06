import React from "react";
import PageNotFound from "../LayoutArea/MainLayoutPages/PageNotFound/PageNotFound";
import ContactUsPage from "../LayoutArea/MainLayoutPages/ContactUsPage/ContactUsPage";
import HomePage from "../LayoutArea/MainLayoutPages/HomePage/HomePage";
import Root from "../LayoutArea/MainLayoutPages/Root/Root";

const Routes = [
  {
    // Root is my layout
    path: "/",
    element: <Root/>,
    errorElement: <PageNotFound />,
    children: [
      // the url to the component
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
];

export default Routes;
