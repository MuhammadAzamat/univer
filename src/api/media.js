/* eslint-disable react-hooks/rules-of-hooks */
import { usePost } from "./http/fetch";

export const findOne = (id) => usePost(`/users`, id);
