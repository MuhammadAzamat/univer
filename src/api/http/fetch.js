import axios from "axios";

// const env = import.meta.env;
// const devInstance = createInstance(process.env.REACT_APP_BASE_URL);

const productionInstance = createInstance(process.env.REACT_APP_BASE_URL);

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
    },
  });
}
export const useGet = (url, params) => productionInstance.get(url, { params });
export const usePost = (url, data) => productionInstance.post(url, data);
export const usePut = (url, data) => productionInstance.put(url, data);
export const usePatch = (url, data) => productionInstance.patch(url, data);
export const useDelete = (url, data) => productionInstance.delete(url, data);
