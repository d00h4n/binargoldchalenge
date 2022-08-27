import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchCar from './page/searchcar';
import Home from './page/Home';
import Detail from './page/list';


function App() {
 return (
    <Router>
      <div className="App">
        {/* <NavbarCar/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchCar />
          </Route>
          <Route path="/Detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
