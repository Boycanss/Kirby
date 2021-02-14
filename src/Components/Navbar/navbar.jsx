import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from './cartNav';

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
            style={{
                width: '90%',
                margin: 'auto',
                borderRadius: '25px',
                marginTop: '10px'
            }}
        >
            <Navbar.Brand>
                <NavLink to="/"  className="navlink-link">
                    KIRBY
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Character</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Nature</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Abstract</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Show All</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/cart" className="navlink-link">
                            <Cart />
                        </NavLink>
                    </Nav.Link>

                    <Nav.Link eventKey={2} >
                        <NavLink to="/account" className="navlink-link">
                            Account
                        </NavLink>

                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default navbar
