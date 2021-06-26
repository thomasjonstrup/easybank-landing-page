import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'

import ImageMockups from "url:./images/image-mockups.png";
import ImageCard1 from "url:./images/image-currency.jpg";
import ImageCard2 from "url:./images/image-restaurant.jpg";
import ImageCard3 from "url:./images/image-plane.jpg";
import ImageCard4 from "url:./images/image-confetti.jpg";

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
						<button className="btn btn--primary btn--hero">
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
						<FeatureBox
							name="Online Banking"
							paragraph="Our modern web and mobile applications to keep track of your finances wherever you are in the world."
							icon="online"
						/>
						<FeatureBox
							name="Simple Budgeting"
							paragraph="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
							icon="budgeting"
						/>
						<FeatureBox
							name="Fast Onboarding"
							paragraph="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
							icon="onboarding"
						/>
						<FeatureBox
							name="Open API"
							paragraph="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
							icon="api"
						/>
					</div>
				</div>
			</section>
			<section className="articles">
				<div className="container">
					<h2>Latest Articles</h2>
					<div className="cards">
						<div className="card">
							<div className="card__image">
								<img src={ImageCard1} alt="image-currency" />
							</div>
							<div className="card__body">
								<p className="card__author">
									By Claire Robinson
								</p>
								<h3 className="card__title">
									Receive money in any currency with no fees
								</h3>
								<p className="card__copy">
									Receive money in any currency with no fees
									The world is getting smaller and we’re
									becoming more mobile. So why should you be
									forced to only receive money in a single …
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card__image">
								<img src={ImageCard2} alt="image-currency" />
							</div>
							<div className="card__body">
								<p className="card__author">
									By Claire Robinson
								</p>
								<h3 className="card__title">
									Receive money in any currency with no fees
								</h3>
								<p className="card__copy">
									Receive money in any currency with no fees
									The world is getting smaller and we’re
									becoming more mobile. So why should you be
									forced to only receive money in a single …
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card__image">
								<img src={ImageCard3} alt="image-currency" />
							</div>
							<div className="card__body">
								<p className="card__author">
									By Claire Robinson
								</p>
								<h3 className="card__title">
									Receive money in any currency with no fees
								</h3>
								<p className="card__copy">
									Receive money in any currency with no fees
									The world is getting smaller and we’re
									becoming more mobile. So why should you be
									forced to only receive money in a single …
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card__image">
								<img src={ImageCard4} alt="image-currency" />
							</div>
							<div className="card__body">
								<p className="card__author">
									By Claire Robinson
								</p>
								<h3 className="card__title">
									Receive money in any currency with no fees
								</h3>
								<p className="card__copy">
									Receive money in any currency with no fees
									The world is getting smaller and we’re
									becoming more mobile. So why should you be
									forced to only receive money in a single …
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
