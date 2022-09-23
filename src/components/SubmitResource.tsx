import { IAppState } from "../utils/interfaces";

interface SubmitResourceProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function SubmitResource({ appState, setAppState }: SubmitResourceProps) {
  return <p>Submit Resource Page</p>;
}
