import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import Login from '../img/fondoLogin.png';
import Logo from '../img/Logo.png';
import axios from 'axios';

export const Loginpage = () => {

  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/usuario/login', {
        usuario: usuario,
        clave: clave,
      });

      if (response.status === 200) {
        // La autenticación fue exitosa, puedes redirigir a la siguiente página o realizar alguna acción.
        console.log('Autenticación exitosa');
        navigate('/manager');
        console.log('Respuesta del servicio de login:', response);
      } else {
        // La autenticación falló, puedes mostrar un mensaje de error al usuario.
        console.log('Error en la autenticación');
      }
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
      console.error('Detalles completos de la respuesta del servidor:', error.response);

      // Modificación para manejar credenciales incorrectas
      if (error.response && error.response.status === 400) {
        console.log('Credenciales incorrectas');
      } else {
        console.log('Otro tipo de error');
      }
    }
  };

  return (
    <div className='container-login'>
      <img className='login' src={Login} alt='imagen-inicio' />
      <div className='central-component'>
        <img className='logo' src={Logo} alt='logo-universidad' />
        <h2 className='title-login'>Iniciar sesión</h2>
        <label htmlFor='usuario' className='user-text'>
          Usuario
        </label>
        <input
          type='text'
          id='usuario'
          className='user-input'
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label htmlFor='clave' className='password-text'>
          Clave
        </label>
        <input
          type='password'
          id='clave'
          className='password-input'
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <button type='submit' className='continue-button' onClick={handleLogin}>
          Continuar
        </button>
        <h5 className='title_cuenta'>¿No tienes cuenta? Regístrate</h5>
      </div>
    </div>
  );
};