import axios from "axios";
import { BASEURL, userID } from "./interfaces";

export async function postFavourites(
  userID: userID,
  resourceID: number
): Promise<void> {
  await axios.post(`${BASEURL}/user/${userID}/favourites/${resourceID}`);
}
