import { IAppState } from "../utils/interfaces";

interface MainProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function Main({ appState, setAppState }: MainProps): JSX.Element {
  return (
    <main>
      {/* <DisplayResources />
      <StudyResources />
      <SubmitResource /> */}
    </main>
  );
}
