import styles from './FeedbackPage.module.css';
import AddComment from '@components/AddComment';
import Feedback from '@components/Feedback/Feedback';
import PostLinkBack from '@components/PostLinkBack';

const FeedbackPage = ({match}) => {

  const id = match.params.id;

  return (
    <>
      <PostLinkBack/>
      <Feedback postId={id}/>
      <AddComment/>
    </>
  )
}

export default FeedbackPage;