import styles from './Feedback.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import comments_icon from "./img/icon-comments.svg";
import FeedbackService from '@services/feedback.service.js';
import cs from 'classnames';
import { Link } from 'react-router-dom';

const Feedback = (props) => {
  
  const [user, setUser] = useState({})
  const [votes, setVotes] = useState(0);
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [votedFor, setVotedFor] = useState(false);
  const [title, setTitle] = useState('');
  const [feedback, setFeedback] = useState('');
  const { isLoggedIn } = useSelector(state => state.auth);

  const getResourсe = ()  => {
    FeedbackService.getFeedback(props.postId)
      .then( res => res.data)
      .then( res => {
        setVotes(res.numberOfVotes)
        setNumberOfComments(res.numberOfComments)
        return res.post
      })
      .then( ({ title, content }) => {
        setTitle(title);
        setFeedback(content);

        if (isLoggedIn && user.id) {
          FeedbackService.checkIfVote(user.id, props.postId)
            .then( res => res.data)
            .then( data => {
              setVotedFor(data.votedFor)
            })
        }
      })
      /// написати обробку помилок компонент обгортку
  }

  const handleVoteClick = () => {
    // написати перевірку чи користувач зареєстрований
    if (isLoggedIn && user.id) {
      if (votedFor) {
        FeedbackService.unVote(user.id, props.postId)
          .then( res => {
            setVotes(votes - 1);
            setVotedFor(false);
          })
          .catch(err => {
            console.log(err);
          })

      } else {
        FeedbackService.vote(user.id, props.postId)
          .then( res => {
            setVotes(votes + 1);
            setVotedFor(true)
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
 
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) || {});
  }, [])

  useEffect(() => {
    getResourсe();
  }, [user])

  return (
    <div className={styles.feedback_container}>
      <button className={votedFor ? cs(styles.vote_cell, styles.voted_cell) : styles.vote_cell} onClick={handleVoteClick}>
        <div className={votedFor ? cs(styles.vote_cell__image, styles.voted_cell__image) : styles.vote_cell__image}></div>
        {votes}
      </button>
      <div className={styles.feedback_cell}>
        <h4 className={styles.feedback_title}>{title}</h4>
        <p className={styles.feedback_subtitle}>{feedback}</p>
      </div> 
      <div className={styles.feedback_comments_component}>
        <img className={styles.comments_icon} src={comments_icon} alt="comments icon" />
        {numberOfComments}
      </div>
    </div>
  );
};

export default Feedback;
