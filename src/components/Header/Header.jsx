import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
