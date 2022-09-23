import { IAppState } from "./utils/interfaces";

interface StudyResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function StudyResourcesProps({
  appState,
  setAppState,
}: StudyResourcesProps) {
  return <p>Study Resources Pages</p>;
}
