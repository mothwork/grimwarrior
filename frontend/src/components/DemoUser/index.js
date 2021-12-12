// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function DemoUserButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('mithrandir');
  const [password, setPassword] = useState('mellon');
  const [ errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/spells" />
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    history.push('/spells')
  }

  return (
    <button onClick={handleSubmit}>Demo User</button>
  );
}

export default DemoUserButton;
