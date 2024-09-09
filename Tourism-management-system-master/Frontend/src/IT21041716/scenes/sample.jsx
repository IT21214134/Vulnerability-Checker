import React, { useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isLoggedIn } from '../actions/authActions';



const Index = () => {

    const navigate = useNavigate();
    const authenticated = useSelector(state => state.auth.authenticated);
    const dispatch = useDispatch();


    const logout = () => {
        dispatch(signout())
    }



    const renderLoggedIn = () => {
        return (
            <Nav>
                <NavLink className="nav-link" onClick={logout}>Sign out</NavLink>
            </Nav>
        );
    }
    const renderNonLoggedIn = () => {
        return (
            <Nav>
                <NavLink to="/login" className="nav-link" >Sign In</NavLink>
                <NavLink to="/signup" className="nav-link" >Sign Up</NavLink>

            </Nav>
        );
    }
    useEffect(() => {
        if (!authenticated) {
            dispatch(isLoggedIn());
        }
    }, []);


    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">TECHNO SOLUTION PVT LTD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}>HOME</Nav.Link>


                        </Nav>
                        {authenticated ? renderLoggedIn() : renderNonLoggedIn()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Index
