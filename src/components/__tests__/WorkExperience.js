import React from "react";
import { shallow } from "enzyme";
import WorkExperience from "../WorkExperience";

describe("<WorkExperience />", () => {
	it("renders correctly", () => {
		const workDescriptions = {
			conversocial: ["work", "work", "work"],
			verv: ["work", "work", "work"],
			ibm: ["work", "work", "work"],
			queens: ["work", "work", "work"],
		};
		const wrapper = shallow(<WorkExperience workDescriptions />);
		expect(wrapper).toMatchSnapshot();
	});
});
