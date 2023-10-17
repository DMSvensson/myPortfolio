import React from "react";
import styles from './ProjectCard.module.css';
import SkillTag from "../skillTag/SkillTag";

function ProjectCard({image, title, description, link, skills}) {
    return (
        <div className={styles.project}>
            <img className={styles.img} src={image} alt="project website"/>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            {link && <a className={`btn ${styles.action}`} href={link} target='blank'>View Project</a>}
            <div className={styles.skills}>
                {skills && skills.map(skill => {
                    return <SkillTag skill={skill.skill} type={skill.type} />
                })}                
            </div>
        </div>
    );
}

export default ProjectCard;