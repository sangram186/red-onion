import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import './Header.css';
import cartIcon from '../../images/icon/Path 1.png'
import { Link } from 'react-router-dom';

// require(`../../images/foodItems/${allFoods[0].photoUrl}`)


const Header = () => {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand><Link to='/'><img className='logo' src={logo} alt=""/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav className='mr-3'><img src={cartIcon} alt=""/></Nav>
                        <Nav className='mr-3'><Link to='/login'>Login</Link></Nav>
                        <Nav><Link to='/sign-Up'>Sign Up</Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;