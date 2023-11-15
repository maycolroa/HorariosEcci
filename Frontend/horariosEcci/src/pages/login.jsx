import React from 'react';
import '../css/login.css';
import Login from '../img/fondoLogin.png';
import Logo from '../img/Logo.png';

export const Loginpage = () => {
  return (
    <div className='container-login'>
      <img className='login' src={Login} alt='imagen-inicio' />
      <div className='central-component'>
        <img className='logo' src={Logo} alt='logo-universidad' />
        <h2 className='title-login'>Iniciar sesión</h2>
        <label htmlFor='usuario' className='user-text'>
          Usuario
        </label>
        <input type='text' id='usuario' className='user-input' />
        <label htmlFor='clave' className='password-text'>
          Clave
        </label>
        <input type='password' id='clave' className='password-input' />
        <button type='submit' className='continue-button'>
          Continuar
        </button>
        <h5>¿No tienes cuenta? Regístrate</h5>
      </div>
    </div>
  );
};

