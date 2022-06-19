import styles from './FeedbackPage.module.css';
import Feedback from '@components/Feedback/Feedback';
import PostLinkBack from '@components/PostLinkBack';
import Comments from '@components/Comments';

const FeedbackPage = ({match}) => {

  const id = match.params.id;

  return (
    <>
      <PostLinkBack/>
      <Feedback postId={id}/>
      <Comments postId={id}/>
    </>
  )
}

export default FeedbackPage;