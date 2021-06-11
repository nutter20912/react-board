import { request } from '../utils';

const API_HOST = 'http://localhost:3022';

const getPosts = () => request('get', '/posts');

const userLogin = ({ username, password }) => request('get', '/user', {
  username,
  password,
});

const addPost = (data) => request('post', `${API_HOST}/posts`, data);

export {
  userLogin,
  getPosts,
  addPost
};