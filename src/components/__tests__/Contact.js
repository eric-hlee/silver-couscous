import React from 'react'
import { act } from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl'
import Contact from '../Contact'

describe('<Contact />', () => {
	const getComponent = () =>
		mount(
			<IntlProvider locale="en">
				<Contact />
			</IntlProvider>,
			{ attachTo: window.domNode }
		)
	let div
	beforeEach(() => {
		div = document.createElement('div')
		window.domNode = div
		document.body.appendChild(div)
		jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({
				json: () => Promise.resolve({}),
			})
		})
	})

	afterEach(() => {
		document.body.removeChild(div)
		global.fetch.mockRestore()
	})

	it('renders correctly', () => {
		const wrapper = shallow(<Contact />)
		expect(wrapper).toMatchSnapshot()
	})

	it('posts to / and shows modal on form submission success', async () => {
		const wrapper = getComponent()

		const nameInput = wrapper.find("input[name='name']")
		nameInput.simulate('change', { target: { name: 'name', value: 'eric' } })

		const emailInput = wrapper.find("input[name='email']")
		emailInput.simulate('change', {
			target: { name: 'email', value: 'eric@test.com' },
		})

		const textarea = wrapper.find('textarea')
		textarea.simulate('change', {
			target: { name: 'message', value: 'testing' },
		})

		const submitButton = wrapper.find("Button[type='submit']")
		await act(async () => {
			submitButton.simulate('submit')
		})

		expect(global.fetch).toHaveBeenCalledTimes(1)
		expect(global.fetch).toHaveBeenCalledWith('/', {
			body: 'form-name=contact&name=eric&email=eric%40test.com&message=testing',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			method: 'POST',
		})

		wrapper.update()
		expect(wrapper.find('Modal').first().prop('show')).toBe(true)
	})

	it('shows feedback message and does not post to / on input validation failure', async () => {
		const wrapper = getComponent()

		const nameInput = wrapper.find("input[name='name']")
		nameInput.simulate('change', { target: { name: 'name', value: '' } })

		const emailInput = wrapper.find("input[name='email']")
		emailInput.simulate('change', {
			target: { name: 'email', value: '' },
		})

		const textarea = wrapper.find('textarea')
		textarea.simulate('change', {
			target: { name: 'message', value: '' },
		})

		const submitButton = wrapper.find("Button[type='submit']")
		await act(async () => {
			submitButton.simulate('submit')
		})

		wrapper.update()
		expect(wrapper.find('Feedback[type="invalid"]').first().text()).toEqual(
			'Please enter your name.'
		)
		expect(wrapper.find('Feedback[type="invalid"]').at(1).text()).toEqual(
			'Please provide a valid email.'
		)
		expect(wrapper.find('Feedback[type="invalid"]').last().text()).toEqual(
			'Please enter a message.'
		)
		expect(global.fetch).not.toHaveBeenCalled()
	})

	it('hides modal on close button click', async () => {
		const wrapper = getComponent()

		const nameInput = wrapper.find("input[name='name']")
		nameInput.simulate('change', { target: { name: 'name', value: 'eric' } })

		const emailInput = wrapper.find("input[name='email']")
		emailInput.simulate('change', {
			target: { name: 'email', value: 'eric@test.com' },
		})

		const textarea = wrapper.find('textarea')
		textarea.simulate('change', {
			target: { name: 'message', value: 'testing' },
		})

		const submitButton = wrapper.find("Button[type='submit']")
		await act(async () => {
			submitButton.simulate('submit')
		})

		wrapper.update()
		const closeButton = wrapper.find("Button[variant='secondary']")
		closeButton.simulate('click')
		expect(wrapper.find('Modal').first().prop('show')).toBe(false)
	})
})
