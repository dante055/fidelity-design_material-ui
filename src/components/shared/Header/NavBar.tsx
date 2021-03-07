import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Button, useMediaQuery, useTheme } from '@material-ui/core';

import logo from '../../../resources/assets/svg/logo.svg';
import TabsContainer from './TabContainer';
import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
  logo: {
    height: '5rem',
    [theme.breakpoints.down('md')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.5rem',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Button
        className={classes.logoContainer}
        component={Link}
        to='/'
        disableRipple
      >
        <img src={logo} className={classes.logo} alt='company logo' />
      </Button>
      {matches ? <Drawer /> : <TabsContainer />}
    </>
  );
}

export default NavBar;
