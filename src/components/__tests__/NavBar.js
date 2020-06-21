import React from 'react'
import { IntlProvider } from 'react-intl'
import { shallow, mount } from 'enzyme'
import NavBar from '../NavBar'

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper).toMatchSnapshot()
  })

  it('switches between languages when toggle button clicked', () => {
    const onChangeLanguage = jest.fn()
    const wrapper = mount(
      <IntlProvider locale="en">
        <NavBar onChangeLanguage={onChangeLanguage} />
      </IntlProvider>
    )
    wrapper.find('Button').simulate('click')
    expect(onChangeLanguage).toHaveBeenCalled()
  })
})
