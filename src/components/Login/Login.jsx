import React, { useState, useRef } from "react";
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "@store/actions/auth.js";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <Form onSubmit={handleLogin} ref={form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <Input
              type="text"
              className={styles.inputField}
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <Input
              type="password"
              className={styles.inputField}
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className={styles.formGroup}>
            <button className={styles.btnPrimary} disabled={loading}>
              {loading && (
                <span className={styles.spinnerBorder}></span>
              )}
              <span>Login</span>
            </button>
          </div>

          <CheckButton style={{ display: "none" }} ref={checkBtn} />

          <p>Create new account? <NavLink className={styles.link} to='/register'>Sign up!</NavLink></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;