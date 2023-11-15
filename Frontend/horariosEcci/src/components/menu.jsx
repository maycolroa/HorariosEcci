import Logo from '../img/Logo.png';
import photo from '../img/photo.png';
import '../css/menu.css'

export const Menu = () => {

  return (
    <div className='container-menu'>
      <img className='logo-menu' src={Logo} alt='logo-iniversidad' />
      <div className='logo-and-name'>
        <img className='photo' src={ photo } alt='logo-teacher' />
        <h3 className='name' > jose ramiro</h3>
      </div>
      <button type='submit' className='dashboard-button'>
          Tablero
      </button>
      <button type='submit' className='search-button'>
          Buscar
      </button>
      <button type='submit' className='class-button'>
          Mis Clases
      </button>
      <button type='submit' className='settings-button'>
          Configuraciones
      </button>
    </div>
  );
};
