import axios from 'axios';

const API = 'http://localhost:3001/api/posts'; // backend của mày

export const getPosts = () => axios.get(API);
export const createPost = (data) => axios.post(API, data);
