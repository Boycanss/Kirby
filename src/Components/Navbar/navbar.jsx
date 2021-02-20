import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from './cartNav';

const navbar = ({cartTot}) => {
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
                <a href="/" className="navlink-link">
                    KIRBY
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/category/Clothing">Clothing</NavDropdown.Item>
                        <NavDropdown.Item href="/category/Sprites">Sprites</NavDropdown.Item>
                        <NavDropdown.Item href="/category/Art">Art</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Show All</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/cart" className="navlink-link">
                            <Cart cartTotal={cartTot}/>
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
