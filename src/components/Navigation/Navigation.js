import { useAuth } from 'hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.navigationContainer}>
      <Link className={styles.logo} to="/">
        Phone<span className={styles.logoSpan}>book</span>
      </Link>
      {isLoggedIn && (
        <NavLink className={styles.link} activeClassName={styles.activeLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
