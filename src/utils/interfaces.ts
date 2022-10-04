import { Itag } from "../components/SubmitResource";

export interface IAppState {
  loggedInUser: IUser | null;
  userList: IUser[];
  faveResources: IResource[];
  allResources: IResource[];
  searchAllResources: ISearchQuery;
  searchStudyResources: ISearchQuery;
  currentTags: ITagResource[];
}

export interface ITagResource {
  tagName: string;
  resourceID: number;
}

export type userID = number;
export interface IUser {
  userID: userID;
  username: string;
  isFaculty: boolean;
}

export const BASEURL = "https://study-resource-catalog-c5c3.herokuapp.com";
// export const BASEURL = "http://localhost:4000";
export type Preference = "like" | "dislike";

export type ResourceID = number;

export interface IResource {
  resourceID: ResourceID;
  submitter: userID;
  title: string;
  author: string;
  URL: string;
  timestamp: string;
  summary: string;
  reccomendationText: string;
  reccomendationOptions: string;
}

export interface IComment {
  commentID: number;
  userID: userID;
  message: string;
  timestamp: string;
}

export interface ISearchQuery {
  searchTerm: string;
  tag: Itag[];
}

export interface ILike {
  userID: userID;
  resourceID: ResourceID;
  preferences: Preference;
}
