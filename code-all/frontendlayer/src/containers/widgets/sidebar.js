import React from 'react';
import {NavLink} from 'react-router-dom';
export const SideBar = (props)=>{
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              <span data-feather="home"></span>
              DashBoard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add">
              <span data-feather="home"></span>
              Add Notes <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/list">
              <span data-feather="file"></span>
              List Notes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              <span data-feather="shopping-cart"></span>
              Search Notes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/delete">
              <span data-feather="users"></span>
              Delete Notes
            </NavLink>
          </li>

        </ul>


      </div>
    </nav>
    );
}