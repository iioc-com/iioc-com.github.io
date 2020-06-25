import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg">
  <Link className="navbar-brand" to="/">{siteTitle}</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/contact-us">About us</Link>
      <Link className="nav-link" to="/contact-us">Contact us</Link>
      <Link className="nav-link" to="/donate">Donate now</Link>
      <NavDropdown title="Our services" id="basic-nav-dropdown">
        <NavDropdown title="Ask the Shaykh" id="basic-nav-dropdown">
          <Link className="dropdown-item" to="/submit-a-question/">Submit a question</Link>
          <Link className="dropdown-item" to="/submit-a-question/">Submit a question</Link>
        </NavDropdown>
        <NavDropdown title="Marriage Services" id="basic-nav-dropdown">
          <Link className="dropdown-item" to="/submit-a-question/">Matrimony</Link>
          <Link className="dropdown-item" to="/submit-a-question/">Professional Counseling</Link>
          <Link className="dropdown-item" to="/submit-a-question/">Premarital & Marital Counseling</Link>
          <Link className="dropdown-item" to="/marriage-officiation-request/">Marriage Officiation Request</Link>
        </NavDropdown>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
