import styles from './HomaPage.module.css';
import AddComment from '@components/AddComment';
import Feedback from '@components/Feedback/Feedback';
import FeedbackService from '@services/feedback.service.js';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const HomaPage = () => {

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    FeedbackService.getFeedbacks()
      .then( res => res.data)
      .then( data => data.posts)
      .then( posts => setFeedbacks(posts))
  }, [])

  return (
    <>
      {feedbacks.map( feedback => <Link to={`/posts/${feedback.id}`}><Feedback postId={feedback.id}/></Link>)}
      {/*<AddComment/> */}
    </>
  )
}

export default HomaPage;