import styles from '../styles/Hero.module.css'
import img from '../assets/rmBGPerfilHD.png'

const Hero = () => {
    return (
        <div className={styles.main} id='home'>
            <div className={styles.imgWrapper}>
                <img src={img} alt="Perfil Foto" />
            </div>
            <div className={styles.txtWrapper}>
                <h1>Full Stack Developer</h1>
                <p>Tenho 21 anos e sou formado em Analise e Desenvolvimentos de sistemas.
                    Procuro por oportunidades para ingressar na área e seguir meu sonho.
                </p>
            </div>
        </div>
    )
}

export default Hero
