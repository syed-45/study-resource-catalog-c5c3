import { IAppState } from "./interfaces";

export function initialiseAppState(): IAppState {
  const nullSearchQuery = {
    searchTerm: "",
    tag: [],
  };
  const nullAppState: IAppState = {
    loggedInUser: null,
    userList: [],
    studyResources: [],
    allResources: [],
    searchAllResources: nullSearchQuery,
    searchStudyResources: nullSearchQuery,
    currentTags: [],
  };
  return nullAppState;
}
