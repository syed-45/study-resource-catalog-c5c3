import { IAppState } from "./interfaces";

export function initialiseAppState(): IAppState {
  const nullSearchQuery = {
    searchTerm: "",
    tag: [],
  };
  const nullAppState: IAppState = {
    loggedInUser: null,
    userList: [
      // {
      //   userID: 1,
      //   username: "Laura",
      //   isFaculty: false,
      // },
      // {
      //   userID: 2,
      //   username: "Laura2",
      //   isFaculty: false,
      // }
    ], //add user list
    studyResources: [],
    allResources: [],
    searchAllResources: nullSearchQuery,
    searchStudyResources: nullSearchQuery,
  };
  return nullAppState;
}
