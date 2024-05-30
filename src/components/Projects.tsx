import styles from '../styles/Projects.module.css'
import Card from '../components/Card.tsx'
import img from '../assets/CodeImg.png'


const propsCard = {
    title:'ToDo List',
    description:'Feito em React, TypeScript e Node, com sitema em CRUD local',
    image:`${img}`,
    link:'https://github.com/PedroOliveira76'
}

const Projects = () => {
    return (
        <div id='projects' className={styles.containerProjects} >

            <div className={styles.containerTitle}>
                <h1>Projetos </h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.containerCards}>

                <Card title={propsCard.title} description={propsCard.description} image={propsCard.image} link={propsCard.link}/>

                <Card title={propsCard.title} description={propsCard.description} image={propsCard.image} link={propsCard.link}/>

                <Card title={propsCard.title} description={propsCard.description} image={propsCard.image} link={propsCard.link}/>

            </div>

        </div>
    )
}

export default Projects