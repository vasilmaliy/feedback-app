import styles from './AddComment.module.css';

const AddComment = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.space}>Add Comment</h3>
        <textarea  className={styles.textarea} rows="5"></textarea>
        <div className={styles.wrap}>
          <span className={styles.textCounter}>225 characters left</span>
          <button className={styles.btn}>Post Comments</button>
        </div>
    </div>
  )
}

export default AddComment;