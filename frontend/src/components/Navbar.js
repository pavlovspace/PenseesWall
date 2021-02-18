import React from 'react';

const NavBar = ()=>{
  return(
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">PenseesWall</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/signin">SignIn</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/create">Create</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar;