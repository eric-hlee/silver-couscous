import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow, mount } from 'enzyme';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('switches between languages when language buttons clicked', () => {
    const onChangeLanguage = jest.fn();
    const wrapper = mount(
      <IntlProvider locale="en">
        <NavBar language={'en'} onChangeLanguage={onChangeLanguage} />
      </IntlProvider>
    );
    wrapper.find('DropdownToggle').last().simulate('click');
    wrapper.find('DropdownItem').first().simulate('click');
    expect(onChangeLanguage).toHaveBeenCalledWith('zh-CN');
    wrapper.find('DropdownToggle').last().simulate('click');
    wrapper.find('DropdownItem').last().simulate('click');
    expect(onChangeLanguage).toHaveBeenCalledWith('zh-TW');
  });
});
