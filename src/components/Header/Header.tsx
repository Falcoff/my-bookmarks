import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <h1>My Bookmarks</h1>
    </div>
  );
};

export default Header;
