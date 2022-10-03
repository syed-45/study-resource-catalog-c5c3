import { AppStateProps } from "../components/DisplayResources";
import { getFavourites } from "./getFavourites";

export function refreshFaves({ appState, setAppState }: AppStateProps) {
  if (appState.loggedInUser !== null) {
    getFavourites(appState.loggedInUser.userID).then((fetchedFaves) =>
      setAppState((prev) => ({ ...prev, faveResources: fetchedFaves }))
    );
  }
}
