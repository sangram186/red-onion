import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import './Header.css';
import cartIcon from '../../images/icon/Path 1.png'

// require(`../../images/foodItems/${allFoods[0].photoUrl}`)


const Header = () => {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav className='mr-3'><img src={cartIcon} alt=""/></Nav>
                        <Nav className='mr-3'><a href="#">Login</a></Nav>
                        <Nav><a className='sign-up-button' href="#">Sign up</a></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;