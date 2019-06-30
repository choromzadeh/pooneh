import React from 'react';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import '../CSS/navbar.css'
const NavBar = () => {
    return ( 
        <nav className="navbar-expand-lg navbar-light bg-light">
            <a className='navbar-brand ml-5' href="#">
                <img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' className="p-1" width='15%' height='15%'></img>
                pooneh
            </a>
            <div id="navItemContain">
                <ul class="rtl navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link d-flex" href="#">ورود<span class="sr-only">(current)</span></a>
                    </li>

                    <div id="nav-line">|</div>
                    
                    <li class="nav-item ">
                        <a class="nav-link" href="#">عضویت</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">راهنما</a>
                    </li>
                </ul>
            </div>

        </nav>
     );
}
 
export default NavBar;
