import { Outlet, Route, Routes } from "react-router-dom";
import { DisplayResources } from "../DisplayResources";
import { StudyResources } from "../StudyResources";
import { SubmitResource } from "../SubmitResource";
import { IAppState } from "../utils/interfaces";

interface MainProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function Main({ appState, setAppState }: MainProps): JSX.Element {
  return (
    <main>
      <Routes>
        <Route
          path="/submit-resource"
          element={
            <SubmitResource appState={appState} setAppState={setAppState} />
          }
        />
        <Route
          path="/"
          element={
            <StudyResources appState={appState} setAppState={setAppState} />
          }
        />
        <Route
          path="/"
          element={
            <DisplayResources appState={appState} setAppState={setAppState} />
          }
        />
      </Routes>
    </main>
  );
}
