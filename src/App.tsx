import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'

import ImageMockups from "url:./images/image-mockups.png";
import FeatureBox from './components/FeatureBox';

export default function App() {
	return (
		<>
			<Header>
				<Nav></Nav>
			</Header>
			<section className="intro">
				<div className="container">
					<div className="intro__content">
						<h1 className="intro__headline">
							Next generation digital banking
						</h1>
						<p className="intro__content--paragraph large">
							Take your financial life online. Your Easybank
							account will be a one-stop-shop for spending,
							saving, budgeting, investing, and much more
						</p>
						<button className="btn btn--primary">
							Request Invite
						</button>
					</div>
					<div className="intro__image">
						<img src={ImageMockups} alt="image-mockups" />
					</div>
				</div>
			</section>
			<section className="info">
				<div className="container">
					<div className="info__content">
						<h2 className="info__headline">Why choose Easybank?</h2>
						<p className="info__content--paragraph large">
							We leverage Open Banking to turn your bank account
							into your financial hub. Control you finances like
							never before.
						</p>
					</div>
					<div className="info__features">
						<FeatureBox/>
						<FeatureBox/>
						<FeatureBox/>
						<FeatureBox/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
