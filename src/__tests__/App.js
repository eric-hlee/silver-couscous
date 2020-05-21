import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import App from '../App'
import Home from '../components/Home'

describe('<App />', () => {
  it('renders IntlProvider, NavBar, BrowserRouter, Switch and Route', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Home)).toHaveLength(1)
    expect(
      wrapper.find('Router').first().prop('history').location.pathname
    ).toEqual('/')
  })
})
