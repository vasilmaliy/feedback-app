import styles from './AddComment.module.css';
import { useState } from 'react';

const AddComment = () => {

  const charactersLimit = 250;
  const [count, setCount] = useState(charactersLimit);

  const countCharacters = ( e ) => {
    if ( charactersLimit - e.target.value.length < 0) {
      e.target.value = e.target.value.substring(0, charactersLimit);
    }
    
    setCount(charactersLimit - e.target.value.length);
  }

  return (
    <div className={styles.container}>
        <h3 className={styles.space}>Add Comment</h3>
        <textarea  className={styles.textarea} onChange={countCharacters} rows="5"></textarea>
        <div className={styles.wrap}>
          <span className={styles.textCounter}>{count} characters left</span>
          <button className={styles.btn}>Post Comments</button>
        </div>
    </div>
  )
}

export default AddComment;