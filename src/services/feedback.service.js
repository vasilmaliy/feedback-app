import axios from 'axios';
import authHeader from './auth-header';
import { API_FEEDBACK } from '@constants/api';

const getFeedback = (userId) => {
  return axios.get(API_FEEDBACK + 'post', {
    userId,
  });
};

const unVote = (userId) => {
  return axios.delete(API_FEEDBACK + 'unvote/?userId=' + userId, 
  {
    headers: authHeader(),
  });
};

const vote = (userId) => {

  return axios.post(
    API_FEEDBACK + 'vote',
    {
      userId,
      // postId,
    },
    {
      headers: authHeader(),
    }
  );
};

const checkIfVote = (userId) => {
  return axios.get(API_FEEDBACK + 'vote/?userId=' + userId, {
    headers: authHeader(),
  });
};

export default {
  getFeedback,
  vote,
  unVote,
  checkIfVote,
};
