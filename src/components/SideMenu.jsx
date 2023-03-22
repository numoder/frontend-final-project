import { Container, Nav, Navbar, Row } from 'react-bootstrap';

export default function SideMenu() {
    return(
        <Navbar collapseOnSelect expand='lg' sticky='top' className='header'>
            <Container fluid>
                <Row>
                    <Navbar.Brand href='/'>
                        <img
                        xs={12}
                        src="logo.png"
                        width="75"
                        height="75"
                        alt="logo"
                        class='d-inline-block disc'/>
                        <p class='navbar-header d-inline-block'>CHROMESTHESIA</p>
                    </Navbar.Brand>
                </Row>
                <Row>
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