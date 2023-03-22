import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';

export default function SideMenu() {
    return(
        <Navbar collapseOnSelect expand='lg' sticky='top' className='header'>
            <Container fluid>
                <Row xs={6}>
                    <Navbar.Brand href='/'>
                        <img
                        src="logo.png"
                        width="75"
                        height="75"
                        alt="compact disc"
                        class='d-inline-block disc'/>
                        <p class='navbar-header d-inline-block'>CHROMESTHESIA</p>
                    </Navbar.Brand>
                </Row>
                <Row xs={4}>

                    <Nav
                        className='me-auto'
                        style={{ maxHeight: '100px'}}
                        navbarScroll>
                    <Nav.Link href="/create">
                        <button>+</button></Nav.Link>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    )
}