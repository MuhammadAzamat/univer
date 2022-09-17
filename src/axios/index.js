
import Axios from 'axios';

export const apiUrl = 'http://localhost'

export const serverPort = 80

export const myAxios = Axios.create({ baseURL: apiUrl });