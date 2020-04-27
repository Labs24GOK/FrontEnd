import axiosWithAuth from "../../utils/axiosWithAuth";
import API_URL from "../../config/apiUrl";

export const getStudentsInFamily = async (userID) => {

    let result = await axiosWithAuth().get(API_URL + "/users/" + userID + "/students");
    return result.data;
}