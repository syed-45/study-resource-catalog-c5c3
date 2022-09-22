import { IAppState } from "../utils/interfaces";
import LoginUser from "./LoginUser";
import NavigationBar from "./NavigationBar";

interface HeaderProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function Header({ appState, setAppState }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1> HOME PAGE </h1>
      <LoginUser appState={appState} setAppState={setAppState} />

      <NavigationBar appState={appState} />
    </header>
  );
}
