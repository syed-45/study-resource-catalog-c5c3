import { Link } from "react-router-dom";
import { IAppState } from "../utils/interfaces";

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
        <Link to="/">Home</Link>
      </button>
      {appState.loggedInUser && (
        <button onClick={handleToStudyList}>My Study List </button>
      )}
      {appState.loggedInUser && (
        <button onClick={handleToSubmitResource}>
          <Link to="/submit-resource">Submit Resource</Link>
        </button>
      )}
    </div>
  );
}
