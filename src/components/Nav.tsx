import React from 'react';

import Logo from "url:../images/logo.svg";

export default function Nav() {
	return (
		<nav className="header__nav flex flex-jc-sb flex-ai-c">
			<a href="#" className="header__logo">
				<div className="header__logo">
					<img src={Logo} alt="Easybank logo" />
				</div>
			</a>

			{/* <a href="#" className="header__menu hide-for-desktop">
				<span></span>
				<span></span>
				<span></span>
			</a> */}
			<div className="header__menu hide-for-desktop"></div>
			<div className="header__links hide-for-mobile">
				<a className="header__link" href="#">
					Home
				</a>
				<a className="header__link" href="#">
					About
				</a>
				<a className="header__link" href="#">
					Contact
				</a>
				<a className="header__link" href="#">
					Blog
				</a>
				<a className="header__link" href="#">
					Careers
				</a>
			</div>
			<a href="#" className="btn btn--primary hide-for-mobile">
				Request Invite
			</a>
		</nav>
	);
}
