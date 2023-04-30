import React from "react";
import PageNotFound from "../LayoutArea/PageNotFound/PageNotFound";
import ContactUsPage from "../LayoutArea/ContactUsPage/ContactUsPage";
import HomePage from "../LayoutArea/HomePage/HomePage";
import Root from "../LayoutArea/Root/Root";

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
