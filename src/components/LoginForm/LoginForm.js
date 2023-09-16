import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useState } from 'react';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(logIn({ email, password }));
      form.reset();
      setError(null);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      {error && <p className={styles.error}>{error}</p>}
      <label className={styles.formLabel} htmlFor="email">
        Email
        <input
          className={styles.formInput}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label className={styles.formLabel} htmlFor="password">
        Password
        <input
          className={styles.formInput}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </label>
      <button className={styles.logInBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
