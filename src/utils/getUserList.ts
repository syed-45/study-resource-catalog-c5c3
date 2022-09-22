import axios from "axios";
import {IUser} from './interfaces';

export async function getUserList(): Promise <IUser[]> {
    const res = await axios.get(`http://localhost:4000/users`)
    const listOfUsers: IUser[] = [];

    res.data.forEach((item:any) => {
        listOfUsers.push({
            userID: item.user_id,
            username: item.user_name,
            isFaculty: item.is_faculty
        })
    })
    // console.log(res.data)
    return listOfUsers

}