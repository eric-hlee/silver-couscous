import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import KeySkills from "./KeySkills";

export default function About() {
	const [workDescriptions, setWorkDescriptions] = useState({
		conversocial: null,
		verv: null,
		ibm: null,
		queensu: null,
	});

	const getWorkDescriptions = async () => {
		let response = await fetch("https://morning-garden-95959.herokuapp.com/about");
		let data = await response.json();
		return data;
	};

	useEffect(() => {
		getWorkDescriptions()
			.then((res) => res[0])
			.then((res) =>
				setWorkDescriptions({
					conversocial: res.conversocial,
					verv: res.verv,
					ibm: res.ibm,
					queensu: res.queensu,
				})
			)
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main>
			<Tabs defaultActiveKey="work-experience" id="about_tabs">
				<Tab
					eventKey="work-experience"
					title={
						<FormattedMessage
							id="about.work_experience"
							defaultMessage="📃 Work Experience"
						/>
					}
				>
					<WorkExperience workDescriptions={workDescriptions} />
				</Tab>
				<Tab
					eventKey="education"
					title={
						<FormattedMessage
							id="about.education"
							defaultMessage="🎓 Education"
						/>
					}
				>
					<Education />
				</Tab>
				<Tab
					eventKey="key-skills"
					title={
						<FormattedMessage
							id="about.key_skills"
							defaultMessage="🧰 Key Skills"
						/>
					}
				>
					<KeySkills />
				</Tab>
			</Tabs>
		</main>
	);
}
