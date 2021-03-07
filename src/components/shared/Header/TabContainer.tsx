import { useState } from 'react';
import { Tabs, Tab, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useActivePageValue } from '../../../resources/context/ActivePageContext';
import { menu } from '../../../resources/data/menu';
import MenuContainer from './MenuContainer';

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '24px',
  },
  navButton: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const TabsContainer = () => {
  const classes = useStyles();
  const {
    activePage: { pageIndex },
  } = useActivePageValue();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tabs
        className={classes.tabContainer}
        value={pageIndex}
        indicatorColor='primary'
      >
        {menu.map(tab => (
          <Tab
            aria-owns={anchorEl ? `${tab.name}-menu` : undefined}
            aria-haspopup={anchorEl ? true : undefined}
            className={classes.tab}
            key={`${tab.name}-tab`}
            label={tab.name}
            component={Link}
            to={tab.link}
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
              tab?.menuOptions && handleClick(e)
            }
          />
        ))}
      </Tabs>
      <Button
        className={classes.navButton}
        variant='contained'
        color='secondary'
        component={Link}
        to='/estimate'
      >
        Free Estimate
      </Button>

      <MenuContainer anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default TabsContainer;
