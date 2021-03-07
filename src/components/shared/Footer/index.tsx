import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../../../resources/assets/svg/Footer Adornment.svg';
import facebook from '../../../resources/assets/svg/facebook.svg';
import twitter from '../../../resources/assets/svg/twitter.svg';
import instagram from '../../../resources/assets/svg/instagram.svg';

import { footerLinks } from '../../../resources/data/menu';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: theme.zIndex.modal + 1,
    position: 'relative',
    height: '14rem',
    [theme.breakpoints.down('md')]: {
      height: '11rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '9rem',
    },
  },
  adornment: {
    height: '14rem',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      height: '11rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '9rem',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const socialLink = (link: string, alt: string, src: any) => (
    <Grid
      item
      component={'a'}
      href={link}
      rel='noopener noreferrer'
      target='_blank'
    >
      <img alt={alt} src={src} className={classes.icon} />
    </Grid>
  );

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          {footerLinks.map(link => (
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                {link.map(item => (
                  <Grid
                    item
                    component={Link}
                    to={item.link}
                    className={classes.link}
                  >
                    {item.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />

      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        {socialLink('https://www.facebook.com', 'facebook logo', facebook)}
        {socialLink('https://www.twitter.com', 'twitter logo', twitter)}
        {socialLink('https://www.instagram.com', 'instagram logo', instagram)}
      </Grid>
    </footer>
  );
};

export default Footer;

/* {menu.map(menuObj => (
            <Grid item>
              <Grid key={menuObj.name} container direction='column' spacing={2}>
                <Grid
                  item
                  component={Link}
                  to={menuObj.link}
                  className={classes.link}
                >
                  {menuObj.name}
                </Grid>
              </Grid>
              {menuObj?.menuOptions && (
                <>
                  <Grid key={menuObj.name} container direction='column'>
                    {menuObj.menuOptions.map(sub => (
                      <Grid
                        key={sub.name}
                        item
                        component={Link}
                        to={sub.link}
                        className={classes.link}
                      >
                        {sub.name}
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Grid>
          ))} */
