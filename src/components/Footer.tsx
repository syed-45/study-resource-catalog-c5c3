import { Container, Navbar } from "react-bootstrap";
import { IAppState } from "../utils/interfaces";

interface NavigationBarProps {
  appState: IAppState;
}

export function Footer({ appState }: NavigationBarProps): JSX.Element {
  return (
    <div>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand>Made By Team C5C3</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
