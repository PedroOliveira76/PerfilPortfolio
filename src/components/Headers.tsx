import styles from '../styles/Headers.module.css'
import { FaGithub } from "react-icons/fa";

export const Headers = () => {
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
        <a href="https://github.com/PedroOliveira76" target='_blank' className={styles.linkRede}>
          <FaGithub className={styles.gitHub} />
        </a>
      </div>
    </div>
  )
}

export default Headers