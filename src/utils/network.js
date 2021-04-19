import axios from 'axios';
import {BASE_URL} from "./variables";

export const getData = (path) => {
    const baseUrl = BASE_URL;
    const url = baseUrl + path;

    return axios.get(url)
}