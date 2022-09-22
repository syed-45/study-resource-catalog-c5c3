import { IAppState } from "../utils/interfaces";
// import LoginUser from "./LoginUser";

interface NavigationBarProps {
  appState: IAppState;
}

export default function NavigationBar({
  appState,
}: NavigationBarProps): JSX.Element {
  function handleHomePage() {
    console.log("Home Page is working");
  }
  function handleToStudyList() {
    console.log("Study List is working");
  }
  function handleToSubmitResource() {
    console.log("Submit Resource is working");
  }
  return (
    <header>
      <h1> Welcome, {appState.loggedInUser?.username}</h1>
      <button onClick={handleHomePage}> Home Page </button>
      {appState.loggedInUser && (
        <button onClick={handleToStudyList}>My Study List </button>
      )}
      {appState.loggedInUser && (
        <button onClick={handleToSubmitResource}>Sumbit Resource </button>
      )}
    </header>
  );
}
