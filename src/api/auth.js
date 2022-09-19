/* eslint-disable react-hooks/rules-of-hooks */
import { usePost } from "./http/fetch";

export const login = (body) => usePost(`/auth/login`, body);
export const register = (body) => usePost(`/auth/register`, body);
export const forgotPassword = (body) => usePost(`/auth/forgot-password`, body);
export const forgotPasswordSend = (body) =>
  usePost(`/auth/forgot-password/send`, body);
export const forgotPasswordConfirm = (body) =>
  usePost(`/auth/forgot-password/confirm`, body);
export const resetPassword = (body) => usePost(`/auth/reset-password`, body);
export const emailVerification = (body) => usePost(`/auth/email-verify`, body);
