import styles from './Feedback.module.css';
import img from './img/icon-arrow-up.svg';
import comments_icon from "./img/icon-comments.svg";

const Feedback = () => {
  return (
    <div className={styles.feedback_container}>
      <button className={styles.vote_cell}>
        <img src={img} className={styles.vote_cell__image} alt="arrow"/>
        44
      </button>
      <div className={styles.feedback_cell}>
        <h4 className={styles.feedback_title}>4 tags for solutions</h4>
        <p className={styles.feedback_subtitle}>Easier to search for solutions based on a specific stack.</p>
        </div>
      <div className={styles.feedback_comments_component}>
        <img className={styles.comments_icon} src={comments_icon} alt="comments icon" />
        7
      </div>
    </div>
  );
};

export default Feedback;
