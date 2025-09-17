import axios from "axios";

export const authInitAxiosRequest = function (payload) {
    return axios.post("https://mmid.ir/auth_service/userInfo.php", payload);

};