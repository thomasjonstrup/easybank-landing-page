import React, { useState } from 'react';

import Logo from "url:../images/logo.svg";

export default function Nav() {
	const [open, setOpen] = useState(false);

	const activeClassName = "header__menu--active";

	let classNames = ["header__menu", "hide-for-desktop"];

	function removeItemOnce(arr, value) {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}

	if (open) {
		classNames.push(activeClassName);
	} else if (!open && classNames.includes(activeClassName)) {
		classNames = removeItemOnce(classNames, activeClassName);
	}

	const opened = open ? " header__links--open" : "";

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
			<div
				className={classNames.join(" ")}
				onClick={() => {
					setOpen(!open);
					const body = document.body;

					if(!open && !body.classList.contains('overlay')) {
						body.classList.add('overlay');
					} else {
						body.classList.remove("overlay");
					}
				}}
			></div>
			<div className={"header__links" + opened}>
				<a className="header__link" href="#home">
					Home
				</a>
				<a className="header__link" href="#about">
					About
				</a>
				<a className="header__link" href="#contact">
					Contact
				</a>
				<a className="header__link" href="#blog">
					Blog
				</a>
				<a className="header__link" href="#careers">
					Careers
				</a>
			</div>
			<a href="#" className="btn btn--primary hide-for-mobile">
				Request Invite
			</a>
		</nav>
	);
}
