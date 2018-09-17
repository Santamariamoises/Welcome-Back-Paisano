
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default="default" collapseOnSelect="collapseOnSelect">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">CODERS MOST WANTED!!</Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight="pullRight">
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/resources" to="/resources">resources</NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">Know Your Rights</NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">Team</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}
