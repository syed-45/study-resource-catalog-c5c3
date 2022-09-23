import { IAppState } from "./utils/interfaces";

interface StudyResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function StudyResources({ appState, setAppState }: StudyResourcesProps) {
  return <p>Study Resources Pages</p>;
}
