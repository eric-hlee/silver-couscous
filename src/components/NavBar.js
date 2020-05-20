import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FormattedMessage } from 'react-intl';

export default function NavBar() {
	return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <FormattedMessage id="navbar.text" defaultMessage="Eric Lee" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
	)
}
