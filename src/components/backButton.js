import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export const BackButton = props => {
  const { step } = props;
  const classes = useStyles();
  switch (step) {
    
    case 2:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Last step
          </Button>
        </>
      );
      case 3:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Last Step
          </Button>
        </>
      );
      case 4:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Last Step
          </Button>
        </>
      );
    default:
      return <></>;
  }
};



