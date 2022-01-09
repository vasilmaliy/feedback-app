import styles from './NotFoundPage.module.css';
import { useLocation } from 'react-router';
import img from './img/error404.jpg';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt="Not found"/>
      <p className={styles.text}>No match for <u>{location.pathname}</u>. Go to <NavLink to="/" exact>Home page</NavLink></p>
    </>
  )
}

export default NotFoundPage;