/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from '../styles/NavBar.module.css'
import { useEffect } from 'react';
import Icons from '../components/Icons.tsx'

export const NavBar = () => {


  useEffect(() => {

    const scrollToSec = (event: any) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const yOffset = -70;
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', scrollToSec);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', scrollToSec);
      });
    };

  }, []);


  return (

    <div className={styles.header}>

      <div><strong>Pedro</strong>Henrique</div>

      <div className={styles.containerItem}>

        <ul>
          <li className={styles.linkNav}><a href="#home">Home</a></li>
          <li className={styles.linkNav}><a href="#about">About</a></li>
          <li className={styles.linkNav}><a href="#projects">Projects</a></li>
        </ul>

      </div>

      <div className={styles.containerGit}>

          <Icons nome='GitHub' link='https://github.com/PedroOliveira76' />
    
      </div>

    </div>
  )
}

export default NavBar