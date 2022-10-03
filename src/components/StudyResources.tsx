import { useEffect, useState } from "react";
import { getFavourites } from "../utils/getFavourites";
import { IAppState, IResource } from "../utils/interfaces";
import { refreshFaves } from "../utils/refreshFaves";
import { ResourceCard } from "./ResourceCard";

interface StudyResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function StudyResources({
  appState,
  setAppState,
}: StudyResourcesProps): JSX.Element {
  useEffect(() => {
    refreshFaves({ appState, setAppState });
  }, [setAppState]);
  return (
    <>
      {appState.faveResources.map((resource) => (
        <ResourceCard
          key={resource.resourceID}
          resource={resource}
          appState={appState}
          setAppState={setAppState}
        />
      ))}
    </>
  );
}
