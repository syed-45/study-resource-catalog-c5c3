import { Route, Routes } from "react-router-dom";
import { IAppState } from "../utils/interfaces";
import { routes } from "../utils/routes";
import { DisplayResources } from "./DisplayResources";
import { StudyResources } from "./StudyResources";
import { SubmitResource } from "./SubmitResource";

interface MainProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function Main({ appState, setAppState }: MainProps): JSX.Element {
  return (
    <main>
      <Routes>
        <Route
          path={routes.submitResource}
          element={
            <SubmitResource appState={appState} setAppState={setAppState} />
          }
        />
        <Route
          path={routes.studyResources}
          element={
            <StudyResources appState={appState} setAppState={setAppState} />
          }
        />
        <Route
          path={routes.resources}
          element={
            <DisplayResources appState={appState} setAppState={setAppState} />
          }
        />
      </Routes>
    </main>
  );
}
