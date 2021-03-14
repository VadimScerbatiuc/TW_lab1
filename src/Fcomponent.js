import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import navvbar from './navvbar';

export default function Fcomponent(props) {
    return (
            <navvbar/>
            // <Router>
            //     <div>
            //         <nav>
            //             <ul>
            //                 <li>
            //                     <Link to="/">Home</Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/About">About</Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/Users">Users</Link>
            //                 </li>
            //             </ul>
            //         </nav>
            //         <Switch>
            //             <Route path="/About">
            //                 <About/>
            //             </Route>
            //             <Route path="/Users">
            //                 <Users/>
            //             </Route>
            //             <Route path="/">
            //                 <Home/>
            //             </Route>
            //         </Switch>
            //     </div>
            // </Router>
    
    )
}
