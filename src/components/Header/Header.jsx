import styles from './Header.module.css';
import cs from 'classnames';
import user from './img/user.svg';

const Header = () => {
  return (
    <div className={styles.header}>
        <button className={cs(styles.authentication, styles.loginBtn)}><img className={styles.userIcon} src={user} alt="login-user"/>Log In</button>
        <button className={cs(styles.authentication, styles.singUpBtn)}>Sign up</button>
    </div>
  )
}

export default Header;