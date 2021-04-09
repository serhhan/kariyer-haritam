import React from "react";
import './Navbar.scss';
import '../../all';
import {Link} from 'react-router-dom'
const Navbar = ({restartFunction}) => {
    return (
    <nav>
       <ul className = "nav-list">
           <li className="nav-item">
               <Link to="/home" onClick = {restartFunction} >
                   <i class="fas fa-feather-alt fa-3x"></i>
               </Link>
           </li>
           <li className="nav-item" >
               <Link to="/careermap" onClick = {restartFunction}>
                   Kariyer Haritası
                </Link>
           </li>
           <li className="nav-item">
               <Link to="/aboutus" onClick = {restartFunction}>
                   Hakkımızda
                </Link>
           </li>
           <li className="nav-item">
                <Link to="/home">
                   <i class="fas fa-home fa-2x"></i>
                </Link>
           </li>
       </ul>
    </nav>
    )
}

export default Navbar