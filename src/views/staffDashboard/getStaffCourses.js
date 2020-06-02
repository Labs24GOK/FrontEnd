import axiosWithAuth from "../../utils/axiosWithAuth";

export const getStaffCourses = async (staffID) => {

    let result = await axiosWithAuth()
        .get(`/staff/${staffID}/courses`)
    return result.data;
}