import React from 'react';
import { Menu, MenuItem, makeStyles, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useActivePageValue } from '../../../resources/context/ActivePageContext';
import { menu } from '../../../resources/data/menu';

const useStyles = makeStyles(theme => ({
  menuPaper: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  menuSelected: {
    opacity: 0.9,
  },
}));

const MenuContainer = ({ anchorEl, handleClose }: any) => {
  const classes = useStyles();
  const theme = useTheme();

  const {
    activePage: { menuIndex },
  } = useActivePageValue();

  return (
    <>
      {menu.map(
        menuObj =>
          menuObj?.menuOptions && (
            <Menu
              id={`${menuObj.name}-menu`}
              key={`${menuObj.name}-menu`}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menuPaper }}
              elevation={0}
              style={{ zIndex: theme.zIndex.modal + 2 }}
            >
              {menuObj.menuOptions.map((option, index) => (
                <MenuItem
                  key={`${option.name}-option`}
                  onClick={handleClose}
                  component={Link}
                  to={option.link}
                  classes={{
                    root: classes.menuItem,
                    selected: classes.menuSelected,
                  }}
                  selected={index === menuIndex}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          )
      )}
    </>
  );
};

export default MenuContainer;
