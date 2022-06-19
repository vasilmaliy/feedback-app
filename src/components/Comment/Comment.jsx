import styles from './Comment.module.css';

const Comment = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user_avatar}>{props.userName[0].toUpperCase()}</div>
      <div>
      <h3 className={styles.user_name}>{props.userName}</h3>
      <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  )
}

export default Comment;