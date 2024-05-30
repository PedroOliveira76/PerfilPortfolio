import styles from '../styles/Cards.module.css'
import { FunctionComponent } from 'react';


interface CardProps{
    title:string;
    description:string;
    image: string;
    link: string;
}


const Card:FunctionComponent<CardProps> = ({title, description, image, link}) => {
    return (
        <div className={styles.containerCards}>

            <div className={styles.titleProject}>

                <h3>{title}</h3>
                <p>{description}</p>
                <button className={styles.btn} ><a href={link} target='_blank'>Visitar</a></button>
            </div>

            <div className={styles.containerImgCode}>

                <img src={image} alt="Foto Portfolio" />

            </div>

        </div>
    )
}

export default Card