import axiosApi from "./baseApi"
export const getStudentResultByRegisterno=(regno)=>{
    return axiosApi.get(`/bcaStudent/${regno}`);
}