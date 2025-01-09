import React from "react";
import classes from "./PageContent.module.css";
import Form from "../Form";
import CardContainer  from "../CardContainer";

const PageContent: React.FC = () => {
  return (
    <div className={classes.content}>
      <Form />
      <CardContainer />
    </div>
  );
};

export default PageContent;
