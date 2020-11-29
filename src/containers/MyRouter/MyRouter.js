import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


import About from '../About/About';
import Communication from '../Communication/Communication';
import DesignWork from "../DesignWork/DesignWork";
import EngineeringWork from '../EngineeringWork/EngineeringWork';
import Home from '../Home/Home';
import './MyRouter.css';


class MyRouter extends Component {

    render () {
        return (     
            <div>
                <header>
                    
                    <nav>
                        <ul className="navbar">
                        <li className="navbar__link"><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ff0000'
                                }}
                                >  HOME  //  </NavLink></li>


                            {/* <li className="navbar__link"><NavLink
                                to="/About/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ff0000'
                                }}>ABOUT.</NavLink></li> */}

                            <li className="navbar__link"><NavLink
                                to="/DesignWork/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ff0000'
                                }}>  DESIGN WORK  //  </NavLink></li>

                            <li className="navbar__link"><NavLink   
                                to="/EngineeringWork/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ff0000'
                                }}>  ENGINEERING WORK  //  </NavLink></li>

                           {/*  <li className="navbar__link"><NavLink
                                to="/Communication/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ff0000'
                                }}>  COMS.LANGUAGE.WIP</NavLink></li>
 */}
                        </ul>
                    </nav>
                </header>



                <Switch>
                            <Route path="/About" component={About} />
                            <Route path="/DesignWork" component={DesignWork} />
                            <Route path="/EngineeringWork" component={EngineeringWork} />
                            <Route path="/Communication" component={Communication} />
                            <Route path="/" exact component={Home} />


                </Switch>

            </div>
           
        );
    }
}

export default MyRouter; 