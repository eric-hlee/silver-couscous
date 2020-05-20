import React from "react";
import { FormattedMessage } from "react-intl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import About from "./About";
import Footer from "./Footer";

export default function Home() {
	return (
		<React.Fragment>
			<main>
				<header>
					<Jumbotron>
						<h1>
							<FormattedMessage id="home.greeting" defaultMessage="Hello!" />
						</h1>
						<p className="white">
							<FormattedMessage
								id="home.whoami"
								defaultMessage="My name is Eric."
							/>
						</p>
						<p>
							<Button
								variant="primary"
								href="http://localhost:9000/resume"
								className="icon-download"
							>
								<FormattedMessage id="home.resume" defaultMessage="Resume" />
							</Button>
						</p>
					</Jumbotron>
				</header>
				<section>
					<Container fluid>
						<Row>
							<Col className="img-eric">
								<Image
									src={require("../assets/images/eric.jpg")}
									alt="Picture of Eric"
									height="180"
									width="171"
									fluid
								/>
							</Col>
							<Col>
								<div className="speech-bubble">
									<p>
										<strong>
											<FormattedMessage
												id="home.life_as_dev"
												defaultMessage="🧑🏻‍💻 My life as a developer:"
											/>
										</strong>
									</p>
									<ul>
										<li>
											<FormattedMessage
												id="home.life_as_dev_1"
												defaultMessage="Started learning HTML at 10"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_2"
												defaultMessage="Received an award for creating a website at 12"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_3"
												defaultMessage="Studied computer science in university at 18"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_4"
												defaultMessage="Completed an internship at 22"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_5"
												defaultMessage="Kicked off career as a technical support engineer at 23"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_6"
												defaultMessage="Joined a startup as a junior software engineer at 24"
											/>
										</li>
										<li>
											<FormattedMessage
												id="home.life_as_dev_7"
												defaultMessage="Got laid off due to Covid-19 and looking for new opportunities!"
											/>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<About />
			</main>
			<Footer />
		</React.Fragment>
	);
}
