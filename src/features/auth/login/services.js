import { http } from "../../../axios/index";

export const handleLogin = (data) => http.post("v1/auth/login", data);
