import { ThemeProvider, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from './theme';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { ActiveContextProvider } from './resources/context/ActivePageContext';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
  
const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: 'calc(100vh - 5rem - 14rem)',
    [theme.breakpoints.down('md')]: {
      minHeight: 'calc(100vh - 4rem - 11rem)',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 'calc(100vh - 3.5rem - 9rem)',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ActiveContextProvider>
          <Header />
          <div className={classes.mainContainer}>
            <AppRouter />
          </div>
          <Footer />
        </ActiveContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
