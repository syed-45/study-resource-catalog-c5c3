import { useEffect } from "react";
import { getResources } from "../utils/getResources";
// import { getTags } from "../utils/getStaticData";
import { getTagsWithResources } from "../utils/getTagsWithResources";
import { IAppState, IResource } from "../utils/interfaces";
import { ResourceCard } from "./ResourceCard";
import SearchBar from "./SearchBar";
// import SearchBarForTags from "./SearchBarTags";
interface DisplayResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}
export function DisplayResources({
  appState,
  setAppState,
}: DisplayResourcesProps): JSX.Element {
  useEffect(() => {
    getTagsWithResources().then((tagsWithResources) =>
      setAppState((prev) => ({ ...prev, currentTags: tagsWithResources }))
    );
    getResources().then((allResources) =>
      setAppState((prev) => ({ ...prev, allResources: allResources }))
    );
  }, [setAppState]);
  // console.log(appState.currentTags);
  return (
    <>
      {/* <SearchBarForTags appState={appState} setAppState={setAppState} /> */}
      <SearchBar appState={appState} setAppState={setAppState} />
      <section className="display-resources">
        {appState.allResources.map((resource: IResource, index) => {
          let isThere = false;
          // setAppState((prev) => ({...prev, currentTags: [{tagName:'react', resourceId: 1},{tagName:'js', resourceid: 1}] }))
          // tags = appstate.tags.filter((tag) => tag.resourceid===resource.id)
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
