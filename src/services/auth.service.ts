import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { register } from "module";
import { IActivation, IRegister, ILogin } from "@/types/Auth";

const authService = {
    register: (payload : IRegister) => instance.post(`${endpoint.REGISTER}`, payload),
    activate: (payload: IActivation) => instance.post(`${endpoint.ACTIVATE}`, payload),
    login: (payload: ILogin) => instance.post(`${endpoint.LOGIN}`, payload),
    getProfileWithToken: (token : string) => instance.get(`${endpoint.AUTH}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export default authService;