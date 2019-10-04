import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';

const Navbar = ({ coinData }) => {
	const [darkMode, toggleDarkMode] = useDarkMode(false);
	return (
		<nav className="navbar">
			<Link to="/"><h1>Crypto Tracker</h1></Link>
			<div className="menu">
				{
					coinData.map(coin => <NavLink to={`/${coin.name.toLowerCase()}`} activeClassName="active">{coin.name}</NavLink>)
				}
			</div>
			<div className="dark-mode__toggle">
				<div
					onClick={toggleDarkMode}
					className={darkMode ? 'toggle toggled' : 'toggle'}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
