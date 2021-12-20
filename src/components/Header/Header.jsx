import styles from './Header.module.css';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import user from './img/user.svg';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "@store/actions/auth.js";


const Header = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(logout())
  }

  return (
    <>
      {!isLoggedIn ? (
          <ul className={styles.header}>
          <li>
            <NavLink className={cs(styles.authentication, styles.loginBtn)}  to="/login" exact><img className={styles.userIcon} src={user} alt="login-user"/>Log In</NavLink>
          </li>
          <li>
            <NavLink className={cs(styles.authentication, styles.singUpBtn)} to="/register" exact>Sign up</NavLink>
          </li> 
          </ul>) 
          : (
          <ul className={styles.header}>
            <li>
                <a className={cs(styles.authentication, styles.singOutBtn)} onClick={handleLogOut}>
                    Sign out
                </a>
            </li>
          </ul>
        )}
    </>
  )
}

export default Header;
