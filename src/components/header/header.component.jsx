import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return(
            <header>
                <Navbar role="navigation" sticky="top" expand="md" fixed="true">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">Colorado Beer Map</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar-nav ml-auto">
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">Find Beer</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">Sign Up!</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">Login</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}
    

export default Header;