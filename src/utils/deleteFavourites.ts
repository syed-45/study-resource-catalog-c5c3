import axios from "axios";
import { BASEURL, userID } from "./interfaces";

export async function deleteFavourites(userID: userID, resourceID: number) {
  await axios.delete(`${BASEURL}/user/${userID}/favourites/${resourceID}`);
}
