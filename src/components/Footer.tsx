import styles from '../styles/Footer.module.css'
import Icons from '../components/Icons.tsx'

export const Headers = () => {

  return (
    <div className={styles.footer}>

      <div className={styles.nameTitle}><strong>Pedro</strong>Henrique</div>


      <div className={styles.containerGit}>

          <Icons nome='GitHub' link="https://github.com/PedroOliveira76"/>

          <Icons nome='LinkedIn' link="https://www.linkedin.com/in/pedro-henrique-080baa247/"/>

          <Icons nome='Telefone' link="https://wa.me/5575991625295"/>

      </div>

    </div>
  )
}

export default Headers