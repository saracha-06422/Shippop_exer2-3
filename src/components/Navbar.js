import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../img/logo.jpg';
import {BiCart,BiSearch} from 'react-icons/bi';
import './Navbar.css'


class Navbars extends Component {
    render(){
        return(
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="light"  id="navbar">
                    <Navbar.Brand href="/" id="head">Book </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/#">สินค้าใหม่</Nav.Link>
                        <Nav.Link href="/#">สินค้าขายดี</Nav.Link>
                        <Nav.Link href="/#">สินค้าลดราคา</Nav.Link>
                        <Nav.Link href="/#">สินค้าแนะนำ</Nav.Link>
                        </Nav>

                        <Nav>
                            <a href="/#" className="icons">
                                <BiSearch size="25px"/>
                            </a>
                            <a href="/#" className="icons">
                                <BiCart size="25px"/>
                            </a>
                            <img className="logo" src={logo} alt={"logo"}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbars;