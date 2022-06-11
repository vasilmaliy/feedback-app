import styles from './PostLinkBack.module.css';
import { useHistory } from 'react-router-dom';
import iconBack from './img/back.svg';
import cn from 'classnames';

const PostLinkBack = () => {
  const history = useHistory();

    const handleGoBack = e => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <a className={styles.link}
            href="#"
            onClick={handleGoBack}
        >
          <img className={cn(styles.link__img, 'link')} src={iconBack} alt="Go back" />
            <span>Go back</span>
        </a>
    )
}

export default PostLinkBack;