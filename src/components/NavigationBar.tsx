import { IAppState } from "../utils/interfaces";
// import LoginUser from "./LoginUser";

interface NavigationBarProps {
  appState: IAppState;
}

export default function NavigationBar({
  appState,
}: NavigationBarProps): JSX.Element {
  return (
    <header>
      <h1> Hey I am here with {appState.loggedInUser?.username}</h1>
    </header>
  );
}
