import React, {Component} from "react";

//import statement for React Router
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//import statements for the children
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";




class Main extends Component {
  render() {
    return (
      //HashRouter component provides the foundation for the navigation and browser history handling that routing is made up of.
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          {/*exact prop added so home won't render unnecessarily*/}
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Main;
