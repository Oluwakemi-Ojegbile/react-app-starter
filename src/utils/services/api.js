import axios from "axios";
import { create } from "apisauce";
class Instance {
    static customAxiosInstance(token) {
        const customAxiosInstance = axios.create({
            baseURL: process.env.REACT_APP_LETSHEGO_API_KEY,
            responseType: "json",
            headers: {
                Authorization: token
            }
        })
        const apisauceInstance = create({
            axiosInstance: customAxiosInstance
        });
        return apisauceInstance;
    }
}


export default Instance;
