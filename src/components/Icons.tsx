import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FunctionComponent } from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import styles from '../styles/Icons.module.css'

interface propIcon {
    nome: 'React' |
    'TypeScript' |
    'Mysql' |
    'Node' |
    'Email' |
    'Telefone' |
    'LinkedIn' |
    'GitHub';
    link?: string;
}

const iconMapping: Record<propIcon['nome'], JSX.Element> = {
    React: <FaReact className={styles.react} />,
    TypeScript: <TbBrandTypescript className={styles.type} />,
    Mysql: <SiMysql className={styles.mysql} />,
    Node: <FaNode className={styles.node} />,
    Email: <MdAttachEmail className={styles.email} />,
    Telefone: <FaWhatsapp className={styles.tel} />,
    LinkedIn: <FaLinkedin className={styles.linkedin} />,
    GitHub: <FaGithub className={styles.git} />
};

const Techs: FunctionComponent<propIcon> = ({ nome, link }) => {
    const IconComponent = iconMapping[nome];

    return (
        (link ? (

            <a href={link} target="_blank" className={styles.link}>
                {IconComponent}
            </a>
            
        ):(
            <>{IconComponent}</>
        )
    )


    )
};

export default Techs;
