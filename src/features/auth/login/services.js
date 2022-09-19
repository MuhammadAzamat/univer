import { http } from "../../../axios/index";

export const handleLogin = (data) => http.post("auth/login", data);
