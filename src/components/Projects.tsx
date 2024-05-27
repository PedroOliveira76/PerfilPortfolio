import styles from '../styles/Projects.module.css'

const Projects = () => {
    return (
        <div id='projects' className={styles.containerProjects} >
            
            <div className={styles.containerTitle}>
                <h1>Projetos</h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.containerCards}>

            </div>
            
        </div>
    )
}

export default Projects