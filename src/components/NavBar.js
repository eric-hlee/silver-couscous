import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormattedMessage } from 'react-intl';

export default function NavBar(props) {
  const languageMapping = {
    en: 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
  };

  const selectLanguageMapping = {
    en: 'Select langauge',
    'zh-CN': '选择语言',
    'zh-TW': '選擇語言',
  };

  const getLanguageItem = (lang, index) => {
    if (lang !== props.language) {
      return (
        <Dropdown.Item
          key={index}
          as="button"
          onClick={() => props.onChangeLanguage(lang)}
        >
          {languageMapping[lang]}
        </Dropdown.Item>
      );
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/">
        <FormattedMessage id="navbar.text" defaultMessage="Eric Lee" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <NavDropdown
            title={
              <FormattedMessage
                id="navbar.portfolio"
                defaultMessage="Portfolio"
              />
            }
            id="portfolio-dropdown"
          >
            <NavDropdown.Item href="/chat_app">
              <FormattedMessage
                id="navbar.chat_app"
                defaultMessage="Echo Chat App"
              />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item disabled={true}>
              <FormattedMessage
                id="navbar.to_be_updated"
                defaultMessage="To be updated..."
              />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <DropdownButton
            id="dropdown-item-button"
            title={selectLanguageMapping[props.language]}
            variant="secondary"
          >
            {['en', 'zh-CN', 'zh-TW'].map(getLanguageItem)}
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
