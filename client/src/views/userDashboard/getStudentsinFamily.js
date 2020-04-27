import axios from "axios";
import API_URL from "../../config/apiUrl";

export const getStudentsInFamily = async (userID) => {

    let result = await axios.get(API_URL + "/users/" + userID + "/students");
    return result.data;
}