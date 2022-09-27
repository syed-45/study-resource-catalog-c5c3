import { IAppState } from "../utils/interfaces";
import "bootstrap/dist/css/bootstrap.css";
import LoginUser from "./LoginUser";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface HeaderProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function Header({ appState, setAppState }: HeaderProps): JSX.Element {
  return (
    <header>
      <Navbar bg="success">
        <Container>
          <Navbar.Brand className="app-navbar">
            {/* <img
              src={Logo}
              alt="Learning Resources Logo@clipartmax.com"
              width="100"
              height="60"
              className="d-inline-block align-middle"
            />{" "} */}
            STUDY RESOURCES CATALOGUE
          </Navbar.Brand>
          <LoginUser appState={appState} setAppState={setAppState} />
        </Container>
      </Navbar>

      <NavigationBar appState={appState} />
    </header>
  );
}
