import React from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,

    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },

}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none"
  },
  test: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  }
}));

export default function Navigation() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.link} to="/">
          <StyledBreadcrumb label="Home" icon={<HomeIcon fontSize="small" />} />
        </Link>
        <Link className={classes.link} to='/login'>
          <StyledBreadcrumb label="Log in" />
        </Link>
        <Link className={classes.link} to="/signup">
          <StyledBreadcrumb label="Register" />
        </Link>
      </Breadcrumbs>
    </div>
  );
}