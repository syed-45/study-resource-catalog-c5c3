import { useEffect } from "react";
import { getFavourites } from "../utils/getFavourites";
import { getResources } from "../utils/getResources";
import { IAppState } from "../utils/interfaces";
import { refreshFaves } from "../utils/refreshFaves";
import { ResourceCard } from "./ResourceCard";

export interface AppStateProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function DisplayResources({
  appState,
  setAppState,
}: AppStateProps): JSX.Element {
  useEffect(() => {
    refreshFaves({ appState, setAppState });
  }, [setAppState]);
  useEffect(() => {
    getResources().then((allResources) =>
      setAppState((prev) => ({ ...prev, allResources: allResources }))
    );
  }, [setAppState]);
  return (
    <section className="display-resources">
      {appState.allResources.map((resource) => (
        <ResourceCard
          key={resource.resourceID}
          resource={resource}
          appState={appState}
          setAppState={setAppState}
        />
      ))}
    </section>
  );
}
