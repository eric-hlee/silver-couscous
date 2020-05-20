import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { IntlProvider } from "react-intl";
import { shallow } from "enzyme";
import About from "../About";

describe("<About />", () => {
	let container = null;
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it("renders correctly", () => {
		const wrapper = shallow(<About />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should return data with a successful request", async () => {
		const mockResponse = [
			{
				conversocial: ["work", "work", "work"],
				verv: ["work", "work", "work"],
				ibm: ["work", "work", "work"],
				queensu: ["work", "work", "work"],
			},
		];
		jest.spyOn(global, "fetch").mockImplementation(() => {
			return Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			});
		});

		// Use the asynchronous version of act to apply resolved promises
		await act(async () => {
			render(
				<IntlProvider locale="en">
					<About />
				</IntlProvider>,
				container
			);
		});

		expect(container).toMatchSnapshot();
		expect(container.querySelector(".conversocial").textContent).toContain(
			mockResponse[0].conversocial.join("")
		);
		expect(container.querySelector(".verv").textContent).toContain(
			mockResponse[0].verv.join("")
		);
		expect(container.querySelector(".ibm").textContent).toContain(
			mockResponse[0].ibm.join("")
		);
		expect(container.querySelector(".queensu").textContent).toContain(
			mockResponse[0].queensu.join("")
		);

		// remove the mock to ensure tests are completely isolated
		global.fetch.mockRestore();
	});
});
