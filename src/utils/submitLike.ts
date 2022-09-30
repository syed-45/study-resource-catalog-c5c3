import axios from "axios";
import { BASEURL, Preference, ResourceID, userID } from "./interfaces";

export async function submitPreferences(
  resourceID: ResourceID,
  userID: userID,
  preference: Preference
): Promise<void> {
  const url = `${BASEURL}/resources/preferences`;
  await axios.post(url, {
    user_id: userID,
    resource_id: resourceID,
    preferences: preference,
  });
}
