import React from "react";
import PageNotFound from "../LayoutArea/PageNotFound/PageNotFound";
import ContactUS from "../LayoutArea/ContactUs/ContactUs";
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
        element: <ContactUS />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
];

export default Routes;
