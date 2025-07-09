import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { register } from "module";
import { IRegister } from "@/types/Auth";

const authService = {
    register: (payload : IRegister) => instance.post(`${endpoint.REGISTER}`, payload)
}

export default authService;