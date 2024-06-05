import { useState } from 'react';
import styles from '../styles/ToggledNav.module.css';
import Icons from '../components/Icons.tsx'

const ToggledNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.ToggledNav}>
            <div><strong>Pedro</strong>Henrique</div>
            <div className={styles.containerItem}>
                <button className={styles.menuButton} onClick={toggleDropdown}>
                    {isDropdownOpen ? (
                        <Icons nome='ToggleOn' />
                    ) :
                        <Icons nome='ToggleOff' />}
                </button>

                {isDropdownOpen && (
                    <div className={styles.dropdown}>
                        <ul className={styles.navLinks}>
                            <li className={styles.linkNav}><a href="#home">Home</a></li>
                            <li className={styles.linkNav}><a href="#about">About</a></li>
                            <li className={styles.linkNav}><a href="#projects">Projects</a></li>
                        </ul>
                        <div className={styles.containerGit}>

                            <Icons nome='GitHub' link='https://github.com/PedroOliveira76' />

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToggledNav;
