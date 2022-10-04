import { useEffect } from "react";
import { getResources } from "../utils/getResources";
import { IAppState, IResource } from "../utils/interfaces";
import { ResourceCard } from "./ResourceCard";
import SearchBar from "./SearchBar";

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
  }, [setAppState]);
  return (
    <>
      <SearchBar appState={appState} setAppState={setAppState} />
      <section className="display-resources">
        {appState.allResources.map((resource: IResource) => {
          let isThere = false;

          if (resource.title) {
            if (
              resource.title
                .toLowerCase()
                .includes(appState.searchAllResources.searchTerm.toLowerCase())
            ) {
              isThere = true;
            }
          }
          if (resource.author) {
            if (
              resource.author
                .toLowerCase()
                .includes(appState.searchAllResources.searchTerm.toLowerCase())
            ) {
              isThere = true;
            }
          }
          if (resource.summary) {
            if (
              resource.summary
                .toLowerCase()
                .includes(appState.searchAllResources.searchTerm.toLowerCase())
            ) {
              isThere = true;
            }
          }
          if (isThere) {
            return (
              <ResourceCard
                key={resource.resourceID}
                resource={resource}
                appState={appState}
              />
            );
          } else return "";
        })}
      </section>
    </>
  );
}
