import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {    
    setValue(newValue);
  };

  window.globalState = []


  return (
    <BrowserRouter>
    <CssBaseline />
    <Container maxWidth={false} >
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Host / App #1" component={Link} to="/"/>
          <Tab label="Page 1 / App #2" component={Link} to="/page1" />
          <Tab label="Page 2 / App #3" component={Link} to="/page2"/>
        </Tabs>
      </Paper>
        <Switch>
          <Route path="/">
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Route>
        </Switch>
    </Container>
    </BrowserRouter>
  );
}

export default App;
