import axios from 'axios';
import authHeader from './auth-header';
import {API_TEST} from '@constants/api';

const getPublicContent = () => {
  return axios.get(API_TEST + 'all');
};

const getUserBoard = () => {
  return axios.get(API_TEST + 'user', { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_TEST + 'mod', { headers: authHeader() });
};

const getAdminDoard = () => {
  return axios.get(API_TEST + 'admin', { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminDoard
}