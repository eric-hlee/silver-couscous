import React from "react";
import { shallow, mount } from "enzyme";
import { IntlProvider } from "react-intl";
import Home from "../Home";

describe("<Home />", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});

	it("calls /resume when download resume button is clicked", () => {
		const wrapper = mount(
			<IntlProvider locale="en">
				<Home />
			</IntlProvider>
		);
		wrapper.find("Button").simulate("click");
		global.window = Object.create(window);
		const href = "http://localhost:9000/resume";
		Object.defineProperty(window, "location", {
			value: {
				href,
			},
		});
		expect(window.location.href).toEqual(href);
		delete window.location;
	});
});
