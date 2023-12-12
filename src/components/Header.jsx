import { Container,Nav,NavDropdown,Navbar, } from "react-bootstrap";
import {  LinkContainer} from "react-router-bootstrap";
import '../App.css'

const Header = ()=>{
    return(
        <>
    <Navbar expand="lg" className="nav-style">
        <Container >
            <LinkContainer to="/">
                <Navbar.Brand href="/" className="nav-logo-name">   
            <img src="images/vtu-logo.webp" alt=""height={50} width={80} />
            <h6 className="nav-brand">Visvesvaraya Technological University </h6></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-flex">
            <Nav className="mr-auto " >
                <LinkContainer to="/">
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link >About VTU</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Academics" id="basic-nav-dropdown">
                    <LinkContainer to="/">
                        <NavDropdown.Item href="/">Addmission</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavDropdown.Item href="/">
                            Circular and Notification
                        </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/result">
                        <NavDropdown.Item href="/">Result</NavDropdown.Item>
                    </LinkContainer>
               
                </NavDropdown>

                <NavDropdown title="VTU Department" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Civil Engineering</NavDropdown.Item>
                    <NavDropdown.Item href="/">
                    Computer Science Engineering
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Electronics Engineering</NavDropdown.Item>
               
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>

            
        </Container>
    </Navbar>
  

        </>
    )
}

export default Header 