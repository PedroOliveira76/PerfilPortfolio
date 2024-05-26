import styles from '../styles/About.module.css'
import Techs from './Techs'
const About = () => {
    return (
        <div className={styles.about}>

            <div className={styles.containerTitle}>
                <h1>Sobre mim</h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.containterTxt}>
                <p>Apaixonado por programação, comecei a estudar no final de 2020, ano em que me formei no colégio. Alguns meses depois, procurei um curso técnico na área e me formei no Senai em 2023. Desde então, continuo estudando e buscando oportunidades para ingressar na área que tanto gosto e construir uma carreira profissional sólida. Atualmente, trabalho como Suporte TI enquanto aguardo por uma oportunidade.</p>
            </div>

            <div className={styles.containerTech}>

                <h2>Tecnologias</h2>

                <div className={styles.itens}>

                    <Techs nome='React' />
                    <Techs nome='Node' />
                    <Techs nome='Mysql' />
                    <Techs nome='TypeScript' />

                </div>
            </div>

        </div>
    )
}

export default About
