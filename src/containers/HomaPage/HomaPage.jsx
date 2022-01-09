import styles from './HomaPage.module.css';
import AddComment from '@components/AddComment';
import Feedback from '@components/Feedback/Feedback';

const HomaPage = () => {
  return (
    <>
      <Feedback/>
      <AddComment/>
    </>
  )
}

export default HomaPage;