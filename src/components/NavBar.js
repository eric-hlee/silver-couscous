import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";

export default function NavBar(props) {
  const languageMapping = {
    en: "English",
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
  };

  const selectLanguageMapping = {
    en: "Select langauge",
    "zh-CN": "选择语言",
    "zh-TW": "選擇語言",
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
        <DropdownButton
          id="dropdown-item-button"
          title={selectLanguageMapping[props.language] ?? "Select langauge"}
          variant="secondary"
        >
          {["en", "zh-CN", "zh-TW"].map(getLanguageItem)}
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
}
