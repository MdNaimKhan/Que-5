import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from './todo'

class Main extends Component {
   render() {
       return (
           <Router>
               <div>
                   <nav className="navbar navbar-default">

                       <div className="container-fluid">

                           <div className="navbar-header">

                               <Link className="navbar-brand center" to={'/'}>
                                 <p>{"todos"}</p>
                               </Link>

                           </div>
                           
                       </div>
                   </nav>
                   <Switch>
                       <Route exact path='/' component={Todo} />
                   </Switch>
               </div>
           </Router>
       );
   }
}
export default Main;