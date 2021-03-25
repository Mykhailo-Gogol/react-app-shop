import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  home: {
    width: "100px",
  },
});

const Header = () => {
  const classes = useStyles();

  const HomeIcon = () => {
    return (
      <SvgIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };

  return (
    <div className={"p-2 m-2 border border-primary d-flex"}>
      <Button className={classes.home} variant="contained" color="secondary">
        <HomeIcon color="secondary" />
      </Button>
    </div>
  );
};

export default Header;
