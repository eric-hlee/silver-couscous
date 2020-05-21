import React from 'react'
import { shallow } from 'enzyme'
import KeySkills from '../KeySkills'

describe('<KeySkills />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<KeySkills />)
    expect(wrapper).toMatchSnapshot()
  })
})
