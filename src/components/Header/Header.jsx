import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectCurrency } from '../../redux/selectors';

export default function Header() {
  const currency = useSelector(selectCurrency);
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
        {currency && <p> Your current currency:{currency}</p>}
      </header>
      <Outlet />
    </>
  );
}
