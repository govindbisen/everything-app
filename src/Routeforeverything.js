import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";

import { About } from './About';
import { Classwork } from './Assignments';
import { Dashboard } from './Dashboard';
import { Home } from './Home';



export function Routeforeverything() {
  return (<>
    <Router>
      <div>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <Link to="/assignments">Assignments</Link>
          </li>
        </ul>
      <hr/>


      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/about">
          <About/>
        </Route>
        <Route exact path = "/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path = "/assignments">
          <Classwork/>
        </Route>
      </Switch>

      </div>
    </Router>
  </>);
}


