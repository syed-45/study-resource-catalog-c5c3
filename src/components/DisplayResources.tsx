import { IAppState } from "../utils/interfaces";

interface DisplayResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function DisplayResources({
  appState,
  setAppState,
}: DisplayResourcesProps): JSX.Element {
  return <p>Display Resources Pages</p>;
}
