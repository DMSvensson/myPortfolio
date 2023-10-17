import React from "react";
import styles from './ProjectCard.module.css';

function ProjectCard({image, title, description, link, skills}) {
    return (
        <div className={styles.project}>
            <img className={styles.img} src={image} alt="project website"/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {link && <a className={`btn ${styles.action}`} href={link} target='blank'>View Project</a>}
            <div className={styles.skills}>
                {skills && skills.map(skill => {
                    return <span className={styles.skill}>{skill}</span>
                })}                
            </div>
        </div>
    );
}

export default ProjectCard;