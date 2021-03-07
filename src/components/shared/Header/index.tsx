import React from 'react';
import { ElevationScroll } from '../../../resources/helpers/ElevationScroll';

import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
  appBarRoot: {
    zIndex: theme.zIndex.modal + 1,
    height: '5rem',
    [theme.breakpoints.down('md')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.5rem',
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: '6rem',
    [theme.breakpoints.down('md')]: {
      height: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4.5rem',
    },
  },
}));

function Header(props: any) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBarRoot}>
          <Toolbar disableGutters>
            <NavBar />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <Toolbar style={{ height: '5rem' }} /> */}
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default Header;
