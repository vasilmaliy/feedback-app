import styles from './CreateFeedbackPage.module.css';
import PostLinkBack from '@components/PostLinkBack';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from "react-validation/build/form";
import FeedbackService from '@services/feedback.service.js';

const CreateFeedbackPage = (props) => {
  const charactersLimit = 250;
  const [count, setCount] = useState(charactersLimit);
  const [title, setTitle] = useState(''); 
  const [text, setText] = useState(''); 
  const [user, setUser] = useState({});
  const { isLoggedIn } = useSelector(state => state.auth);

  const handleTitleChange = ( e ) => {
    // countCharacters(e);
    setTitle(e.target.value);
  }

  const handleTextChange = ( e ) => {
    countCharacters(e);
    setText(e.target.value);
  }

  const countCharacters = ( e ) => {
    if ( charactersLimit - e.target.value.length < 0) {
      e.target.value = e.target.value.substring(0, charactersLimit);
    }
    
    setCount(charactersLimit - e.target.value.length);
  }

  const addPost = () => {
    console.log(title);
    console.log(text);
    if (isLoggedIn && user.id) {
      FeedbackService.post({id: user.id, text: title, userName: user.username, content: text})
    }
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    addPost();
    console.log('sand');
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) || {});
  }, []);

  return (
    <>
      <PostLinkBack/>
      <Form onSubmit={handleSubmit} className={styles.container}>
          <h3 className={styles.space}>Add New Place</h3>
          <p className={styles.lable}>Title</p>
          <input type="text" className={styles.title} name="fname" autoComplete="off" onChange={handleTitleChange} ></input>

          <p  className={styles.lable}>Description</p>
          <textarea  className={styles.textarea} onChange={handleTextChange} rows="5"></textarea>
          <div className={styles.buttonWrap}>
              <button className={styles.attachmentBtn} type="button" onClick={handleSubmit}>
                Add image
              </button>
              <button className={styles.attachmentBtn}  type="button" onClick={handleSubmit}>
                Сhoose a location
              </button>
          </div>
          <div className={styles.wrap}>
            <span className={styles.textCounter}>{count} characters left</span>
            <button className={styles.btn}>Add Place</button>
          </div>
      </Form>
    </>
    
  )
}

export default CreateFeedbackPage;