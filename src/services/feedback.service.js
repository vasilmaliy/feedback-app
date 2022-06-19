import axios from 'axios';
import authHeader from './auth-header';
import { API_FEEDBACK } from '@constants/api';

const getFeedback = (postId) => {
  return axios.get(API_FEEDBACK + 'post/?postId=' + postId);
};

const getFeedbacks = () => {
  return axios.get(API_FEEDBACK + 'posts');
};

const getComments = (postId) => {
  return axios.get(API_FEEDBACK + 'comments/?postId=' + postId);
};

const unVote = (userId, postId) => {
  return axios.delete(API_FEEDBACK + 'unvote/?userId=' + userId + "&postId="+postId, 
  {
    headers: authHeader(),
  });
};

const vote = (userId, postId) => {
  return axios.post(
    API_FEEDBACK + 'vote',
    {
      userId,
      postId,
    },
    {
      headers: authHeader(),
    }
  );
};

const checkIfVote = (userId, postId) => {
  return axios.get(API_FEEDBACK + 'vote/?userId=' + userId + "&postId=" + postId, {
    headers: authHeader(),
  });
};

const comment = ({ id, text, userName, postId}) => {
  return axios.post(
    API_FEEDBACK + 'comment',
    {
      userId: id,
      userName,
      postId,
      text
    },
    {
      headers: authHeader(),
    }
  );
};

export default {
  getFeedback,
  getFeedbacks,
  vote,
  unVote,
  checkIfVote,
  getComments,
  comment
};
