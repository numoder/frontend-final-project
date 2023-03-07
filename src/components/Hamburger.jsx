import { Container, Nav, Navbar } from 'react-bootstrap';

export function Hamburger() {
    return(
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="home">
                    <h1 href="/" className="web-header">XPLR WRLD</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        href="create">Create</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}