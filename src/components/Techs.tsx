import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { FunctionComponent } from "react";

import styles from '../styles/Techs.module.css'

interface propIcon {
    nome: 'React' | 'TypeScript' | 'Mysql' | 'Node';
}

const iconMapping: Record<propIcon['nome'], JSX.Element> = {
    React: <FaReact className={styles.react}/>,
    TypeScript: <TbBrandTypescript className={styles.type}/>,
    Mysql: <GrMysql className={styles.mysql}/>,
    Node: <FaNode className={styles.node}/>,
};

const Techs: FunctionComponent<propIcon> = ({ nome }) => {
    const IconComponent = iconMapping[nome];

    return <>{IconComponent}</>;
};

export default Techs;
