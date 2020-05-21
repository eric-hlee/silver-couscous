import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FormattedMessage } from 'react-intl'

export default function NavBar () {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <FormattedMessage id="navbar.text" defaultMessage="Eric Lee" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  )
}
