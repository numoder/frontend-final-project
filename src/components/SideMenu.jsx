import { Container, Nav, Navbar } from 'react-bootstrap';

export default function SideMenu() {
    return(
        <Navbar collapseOnSelect expand='lg' sticky='top' className='header'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <h1 href="/" className="web-header">XPLR WRLD</h1>
                </Navbar.Brand>
                <Nav
                    className='me-auto'
                    style={{ maxHeight: '100px'}}
                    navbarScroll>
                    <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}