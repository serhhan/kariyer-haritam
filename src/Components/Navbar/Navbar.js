import React from "react";
import './Navbar.scss';
import '../../all';

const Navbar = () => {
    return (
    <nav>
       <ul className = "nav-list">
           <li className="nav-item">
               <a href="#">
                   <i class="fas fa-feather-alt fa-3x"></i>
               </a>
           </li>
           <li className="nav-item">
               <a href="#">Kariyer Haritası</a>
           </li>
           <li className="nav-item">
               <a href="#">Hakkımızda</a>
           </li>
           <li className="nav-item">
               <a href="#">
                   <i class="fas fa-home fa-2x"></i>
               </a>
           </li>
       </ul>
    </nav>
    )
}

export default Navbar