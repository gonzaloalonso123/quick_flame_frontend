import axios from "axios";
import { auth } from "../firebase/index";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000/",
});

api.interceptors.request.use(async (config) => {
  try {
    const idToken = await auth.currentUser.getIdToken(true);
    config.headers.Authorization = idToken;
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`, config.data);
  } catch (error) {
    console.error(error);
  }
  return config;
});

export const useApi = () => {
  const get = async (collection) => {
    const { data } = await api.get(collection);
    return data;
  };

  const post = async (collection, body) => {
    const { data } = await api.post(collection, body);
    return data;
  };

  const patch = async (collection, id, body) => {
    const { data } = await api.patch(`${collection}/${id}`, body);
    return data;
  };

  const del = async (collection, id) => {
    const { data } = await api.delete(`${collection}/${id}`);
    return data;
  };

  return {
    get,
    post,
    patch,
    del,
  };
};
