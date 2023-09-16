import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.userName}>User's Name</p>
      <button
        className={styles.logOutBtn}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
