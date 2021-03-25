import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    color: "blue",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={"p-2 border border-primary"}>
      <h2 className={classes.logo}>header</h2>
    </div>
  );
};

export default Header;
