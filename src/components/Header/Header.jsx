import styles from './Header.module.css';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import user from './img/user.svg';

const Header = () => {
  return (
    <ul className={styles.header}>
        <li>
          <NavLink className={cs(styles.authentication, styles.loginBtn)}  to="/login" exact><img className={styles.userIcon} src={user} alt="login-user"/>Log In</NavLink>
        </li>
        <li>
          <NavLink className={cs(styles.authentication, styles.singUpBtn)} to="/register" exact>Sign up</NavLink>
        </li>
    </ul>
  )
}

export default Header;
