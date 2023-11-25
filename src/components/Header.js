import LogoImg from '../app/assets/img/logo2.png'
import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark color="warning" expand="md">
            <NavbarBrand className="ms-5" href="/">
                <img src={LogoImg} alt="Cafe Bresil Logo" className="float-start"/>
                <h1 className="mt-1">Cafe Breasil</h1>
                <h2 className="mt-1">Freshness in Every Sip</h2>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/'>
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/menu'>
                            <i className="fa fa-home fa-lg" /> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'>
                            <i className="fa fa-home fa-lg" /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'>
                            <i className="fa fa-home fa-lg" /> Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/cart'>
                            <i className="fa fa-home fa-lg" /> Cart
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;