import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                      <NavLink to="/Home"
                       activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}
                      
                      > Home </NavLink>
                    </li>
                    <li>
                      <NavLink to="/About"
                       activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}
                      > About </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Services"
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}> Services </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Post/js"
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}> Javascript </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;