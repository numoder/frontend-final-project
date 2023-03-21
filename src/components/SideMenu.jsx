import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function SideMenu() {
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // }
    return(
        <Navbar collapseOnSelect expand='lg' sticky='top' className='header'>
            <Container fluid>
                <Row>
                <Navbar.Brand href='/'>
                    <img
                    src="logo.png"
                    width="50"
                    height="50"
                    alt="logo"
                    class="d-inline-block align-top">
                        </img>
                        <h1 className='navbar-header'>CHROMESTHESIA SOUND</h1>
                </Navbar.Brand>
                <Nav
                    className='me-auto'
                    style={{ maxHeight: '100px'}}
                    navbarScroll>
                    <Nav.Link href="/create">
                        <button>Create</button></Nav.Link>
                </Nav>
                </Row>
            </Container>
        </Navbar>
    )
}