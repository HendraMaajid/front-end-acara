import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { register } from "module";
import { IActivation, IRegister } from "@/types/Auth";

const authService = {
    register: (payload : IRegister) => instance.post(`${endpoint.REGISTER}`, payload),
    activate: (payload: IActivation) => instance.post(`${endpoint.ACTIVATE}`, payload),
}

export default authService;