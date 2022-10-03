import { useEffect, useState } from "react";
import { getFavourites } from "../utils/getFavourites";
import { IAppState, IResource } from "../utils/interfaces";
import { ResourceCard } from "./ResourceCard";

interface StudyResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function StudyResources({ appState }: StudyResourcesProps): JSX.Element {
  const [faves, setFaves] = useState<IResource[]>([]);
  useEffect(() => {
    if (appState.loggedInUser !== null) {
      getFavourites(appState.loggedInUser.userID).then((fetchedFaves) =>
        setFaves((prev) => fetchedFaves)
      );
    }
  }, [setFaves]);
  return (
    <>
      {faves.map((resource) => (
        <ResourceCard key={resource.resourceID} resource={resource} appState={appState} />
      ))}
    </>
  );
}
