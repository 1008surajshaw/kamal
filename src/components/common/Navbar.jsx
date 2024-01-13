import React from 'react';
import { NavbarLink } from '../../extra/data';
import { Link, matchPath, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.jpg";
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter

const Navbar = () => {
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  return (
     
      <div className={`flex h-25 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "black" : ""
      } transition-all duration-200`}>

        <div className={`flex w-11/12 max-w-maxContent items-center justify-between `}>
          {/* Image */}
          <Link to={"/"}>
            <img src={logo} width={90} height={25} loading='lazy' alt="Logo" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-x-7 text-lg">
              {NavbarLink.map((link, index) => (
                <li key={index}>
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "yellow"
                          : "white"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='mr-5'>
            what
          </div>
        </div>
      </div>
    
    
  );
}

export default Navbar;
