export interface IAppState {
  loggedInUser: IUser | null;
  userList: IUser[];
  studyResources: IResource[];
  allResources: IResource[];
  searchAllResources: ISearchQuery;
  searchStudyResources: ISearchQuery;
}

export type userID = number;
export interface IUser {
  userID: userID;
  username: string;
  isFaculty: boolean;
}

export interface IResource {
  resourceID: number;
  submitter: userID;
  title: string;
  author: string;
  URL: string;
  timestamp: string;
  summary: string;
  reccomendationText: string;
  reccomendationOptions: string;
}

export interface ISearchQuery {
  searchTerm: string;
  tag: string[];
}
export interface Itag {
  tag_name: string
}
export interface IWeek {
  build_week_name: string
}