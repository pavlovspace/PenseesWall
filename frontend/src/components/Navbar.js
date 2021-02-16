import React from 'react';

const NavBar = ()=>{
  return(
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">PenseesWall</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/Home">Home</a></li>
        <li><a href="/SignIn">SignIn</a></li>
        <li><a href="/Profile">Profile</a></li>
        <li><a href="/Signup">Signup</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar;