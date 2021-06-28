import { request } from '../utils';

/** user */
export const userLogin = ({ username, password }) => request('get', '/user', {
  username,
  password,
});

/** board */
export const getPosts = () => request('get', '/posts');
export const addPost = (data) => request('post', '/posts', data);

/** product */
export const getCategorys = () => request('get', '/categorys');
export const getCategory = (id) => request('get', `/category/${id}`);