import styles from './Comments.module.css';
import { useEffect, useState } from 'react';
import FeedbackService from '@services/feedback.service.js';
import { useSelector } from 'react-redux';
import Comment from '@components/Comment/Comment';
import AddComment from '@components/AddComment/AddComment';

const Comments = (props) => {

  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const { isLoggedIn } = useSelector(state => state.auth);

  const getResourсe= () => {
    FeedbackService.getComments(props.postId)
      .then( res => res.data)
      .then( data => data.result)
      .then( result => setComments(result))
  }

  const addComment = (text) => {
    console.log(comments);

    if (isLoggedIn && user.id) {
      setComments([...comments,{id: user.id, text: text, userName: user.username, postId: props.postId}]);
      FeedbackService.comment({id: user.id, text: text, userName: user.username, postId: props.postId})
    }
  }

  useEffect(() => {
    getResourсe()
    setUser(JSON.parse(localStorage.getItem('user')) || {});
  }, []);

  return (
    <>
      <div className={styles.no_comment}>
        <div>{comments.length} comments</div>
        {comments.map((comment) => <Comment text={comment.text} userName={comment.userName}/>)} 
      </div>
      <AddComment addComment={addComment}/>
     </>
  )
}

export default Comments;