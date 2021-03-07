import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  SwipeableDrawer,
  List,
  Toolbar,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useActivePageValue } from '../../../resources/context/ActivePageContext';
import { menu, active } from '../../../resources/data/menu';

const useStyles = makeStyles(theme => ({
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
}));

function Drawer() {
  const classes = useStyles();
  const {
    activePage: { pageIndex, menuIndex },
  } = useActivePageValue();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Toolbar />
        <List disablePadding>
          {menu.map((menuObj, index) => (
            <ListItem
              divider
              classes={{ selected: classes.drawerItemSelected }}
              component={Link}
              to={menuObj.link}
              onClick={() => setOpenDrawer(false)}
              selected={index === pageIndex}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {menuObj.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            divider
            button
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            component={Link}
            to='/estimate'
            onClick={() => setOpenDrawer(false)}
            selected={pageIndex === active.estimate.activeIndex}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
}

export default Drawer;
