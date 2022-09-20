/* eslint-disable react-hooks/rules-of-hooks */
import { useGet, usePatch } from "./http/fetch";

export const findOne = (id) => useGet(`/users`, id);
export const updateStep1 = (id, data) => usePatch(`/users/1/${id}`, data);
export const updateStep2 = (id, data) => usePatch(`/users/2/${id}`, data);
