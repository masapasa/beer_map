import React, { Component } from 'react';
import { 
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Modal, ModalHeader, ModalBody,
    Form, FormGroup ,Label, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {

        const {isNavOpen} = this.state;

        return(
            <React.Fragment>
                <Navbar dark role="navigation" sticky="top" color="secondary" expand="md" fixed="true">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">Colorado Beer Map</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar className="navbar-nav ml-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle tag="a" className="nav-link" caret>
                                        Listings
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag="a" href="/city-listing/boulder" test={'test'}>Boulder</DropdownItem>
                                        <DropdownItem tag="a" href="/city-listing/colorado-springs">Colorado Springs</DropdownItem>
                                        <DropdownItem tag="a" href="/city-listing/denver">Denver</DropdownItem>
                                        <DropdownItem tag="a" href="/city-listing/durango">Durango</DropdownItem>
                                        <DropdownItem tag="a" href="/city-listing/ft-collins">Ft. Collins</DropdownItem>
                                        <DropdownItem tag="a" href="/city-listing/pueblo">Pueblo</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">Map</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                                </NavItem>
                                <Button outline size="sm" onClick={this.toggleModal}>
                                    <i className="fa fa-angle-right" aria-hidden="true" /> Login
                                </Button>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input } />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input } />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="Submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}
    
export default Header;