import { useEffect } from "react";
import { getResources } from "../utils/getResources";
import { IAppState, IResource } from "../utils/interfaces";
import { ResourceCard } from "./ResourceCard";

interface DisplayResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function DisplayResources({
  appState,
  setAppState,
}: DisplayResourcesProps): JSX.Element {
  useEffect(() => {
    getResources().then((allResources) =>
      setAppState((prev) => ({ ...prev, allResources: allResources }))
    );
  }, []);
  return (
    <section className="display-resources">
      {appState.allResources.map((resource) => (
        <ResourceCard
          key={resource.resourceID}
          resource={resource}
          appState={appState}
        />
      ))}
    </section>
  );
}
