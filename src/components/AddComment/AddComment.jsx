import styles from './AddComment.module.css';
import { useState } from 'react';
import Form from "react-validation/build/form";

const AddComment = (props) => {

  const charactersLimit = 250;
  const [count, setCount] = useState(charactersLimit);
  const [text, setText] = useState(''); 

  const handleChange = ( e ) => {
    countCharacters(e);
    setText(e.target.value);
  }

  const countCharacters = ( e ) => {
    if ( charactersLimit - e.target.value.length < 0) {
      e.target.value = e.target.value.substring(0, charactersLimit);
    }
    
    setCount(charactersLimit - e.target.value.length);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    props.addComment(text);
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.container}>
        <h3 className={styles.space}>Add Comment</h3>
        <textarea  className={styles.textarea} onChange={handleChange} rows="5"></textarea>
        <div className={styles.wrap}>
          <span className={styles.textCounter}>{count} characters left</span>
          <button className={styles.btn}>Post Comments</button>
        </div>
    </Form>
  )
}

export default AddComment;