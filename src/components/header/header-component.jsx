import React from 'react'
import {Link} from 'react-router-dom';


const NavBar = ()=>{

        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container mainNav" >
      <Link to="/" class="navbar-brand js-scroll-trigger navlogo">
      
      <span><strong>WitandayDev</strong></span>
      </Link>
      
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="dropdown" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive"  >
        <ul class="navbar-nav ml-auto my-2 my-lg-0" >
          <li class="nav-item">
            <Link class="nav-link js-scroll-trigger"  data-target=".navbar-collapse" to='/'>Home</Link>
          </li>
          <li class="nav-item">
            <Link href="javscript:void(0)" class="nav-link js-scroll-trigger" data-target=".navbar-collapse"to='/projects' >Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link js-scroll-trigger"  data-target=".navbar-collapse" to='/skills'>About us</Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link js-scroll-trigger"  data-target=".navbar-collapse" to='/blog' >Blog</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link js-scroll-trigger"  data-target=".navbar-collapse" to='/contact' >Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        )
    }


    export default NavBar;
