import styles from '../styles/Projects.module.css'
import Card from '../components/Card.tsx'
import Data from '../Data.json'
import { useEffect, useState } from 'react'
import { CardProps } from '../components/Card.tsx'

const Projects = () => {

    const [projectData, setProjectData] = useState<CardProps[]>([])

    useEffect(() => {
        
        setProjectData(Data.projectData)
       
    }, [])

    
    return (
        <div id='projects' className={styles.containerProjects} >

            <div className={styles.containerTitle}>
                <h1>Projetos </h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.containerCards}>

                {projectData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                    />
                ))}

            </div>

        </div>
    )
}

export default Projects