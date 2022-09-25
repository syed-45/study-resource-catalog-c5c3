import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IAppState } from "../utils/interfaces";
import { routes } from "../utils/routes";

interface NavigationBarProps {
  appState: IAppState;
}

export default function NavigationBar({
  appState,
}: NavigationBarProps): JSX.Element {
  return (
    <div>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            Welcome, {appState.loggedInUser?.username}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={routes.resources}>Home</Link>
            </Nav.Link>
            {appState.loggedInUser && (
              <Nav.Link>
                <Link to={routes.studyResources}>My Study List</Link>
              </Nav.Link>
            )}
            {appState.loggedInUser && (
              <Nav.Link>
                <Link to={routes.submitResource}>Submit Resource</Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
