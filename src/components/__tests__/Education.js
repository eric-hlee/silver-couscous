import React from "react";
import { shallow } from "enzyme";
import Education from "../Education";

describe("<Education />", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Education />);
		expect(wrapper).toMatchSnapshot();
	});
});
