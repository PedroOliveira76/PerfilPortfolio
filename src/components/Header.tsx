import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import ToggledNav from './ToggledNav';

const Header = () => {
  const [isToggled, setIsToggled] = useState(window.innerWidth <= 768);

  /* Código para renderizar a NavBar expansiva pegando o tamanho atual da tela e renderizando o componente de acordo */
  const handleResize = () => {
    setIsToggled(window.innerWidth <= 768);
  };

  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isToggled ? <ToggledNav /> : <NavBar />}
    </>
    
  );
};

export default Header;
