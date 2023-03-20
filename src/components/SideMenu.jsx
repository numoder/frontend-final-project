import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

export default function SideMenu() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return(
        <Navbar collapseOnSelect expand='lg' sticky='top' className='header'>
            <Container fluid>
                <Navbar.Brand href='/'
                    src="/src/assets/images/logo.svg"
                    width="30"
                    height="30"
                    alt="logo"
                    class="d-inline-block align-top">
                        CHROMESTHESIA SOUND
                </Navbar.Brand>
                <Nav
                    className='me-auto'
                    style={{ maxHeight: '100px'}}
                    navbarScroll>
                    <Nav.Link href="/create">
                        <button>Create</button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}