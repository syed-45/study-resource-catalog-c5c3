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

export type Preference = 'like' | 'dislike'
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
  tag: string[];
}

export interface ILike {
  userID: userID;
  resourceID: ResourceID
  preferences: Preference;
}
