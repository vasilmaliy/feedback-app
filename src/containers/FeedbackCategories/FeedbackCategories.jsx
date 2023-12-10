import styles from './FeedbackCategories.module.css';
import { NavLink } from 'react-router-dom';

const FeedbackCategories = () => {

  const categories = ['Deforestation','Fire','Air pollution','Water pollution', 'Soil pollution', 'Pollution by enterprises', 'Violation of animal right', 'Radiation', 'Other'];

  return (
    <div className={styles.container}>
      {/* <NavLink className={styles.authentication}  to="/addplace" exact>Add Place</NavLink> */}
      {categories.map((name) => 
        <div className={styles.category}>
          <NavLink to="/" exact className={styles.btn}>
          {name}
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default FeedbackCategories;