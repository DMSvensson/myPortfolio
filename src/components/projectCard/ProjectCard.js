import React, { useEffect, useRef } from "react";
import styles from './ProjectCard.module.css';
import SkillTag from "../skillTag/SkillTag";

function ProjectCard({ image, title, description, link, skills }) {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        element.classList.add(styles.visible);
                        observer.unobserve(element);
                    }
                });
            }, {
                threshold: 0.5
            }
        );

        if(element) {
            observer.observe(element);
        }

        return () => {
            if(element) {
                observer.unobserve(element);
            }
        };
    },[ref])
    
    return (
        <div className={styles.project} ref={ref}>
            <img className={styles.img} src={image} alt="project website" />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            {link && <a className={`btn ${styles.action}`} href={link} target='blank'>View Project</a>}
            <div className={styles.skills}>
                {skills && skills.map(skill => {
                    return <SkillTag skill={skill.skill} type={skill.type} key={skill.skill} />
                })}
            </div>
        </div>
    );
}

export default ProjectCard;