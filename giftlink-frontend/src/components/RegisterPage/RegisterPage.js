import React, { useState } from 'react';
import { urlConfig } from '../../config';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    });
    const json = await response.json();
    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('name', firstName);
      sessionStorage.setItem('email', json.email);
      navigate('/app');
    }
  };

  return <div><button onClick={handleRegister}>Register</button></div>;
}
export default RegisterPage;
