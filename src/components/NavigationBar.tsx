import { Link } from "react-router-dom";
import { IAppState } from "../utils/interfaces";
import { routes } from "../utils/routes";

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
    <div>
      <h1> Welcome, {appState.loggedInUser?.username}</h1>
      <button onClick={handleHomePage}>
        <Link to={routes.resources}>Home</Link>
      </button>
      {appState.loggedInUser && (
        <button onClick={handleToStudyList}>
          <Link to={routes.studyResources}>My Study List</Link>
        </button>
      )}
      {appState.loggedInUser && (
        <button onClick={handleToSubmitResource}>
          <Link to={routes.submitResource}>Submit Resource</Link>
        </button>
      )}
    </div>
  );
}
