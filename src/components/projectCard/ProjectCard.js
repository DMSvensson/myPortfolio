import React, { useEffect, useRef } from "react";
import styles from './ProjectCard.module.css';
import SkillTag from "../skillTag/SkillTag";

function ProjectCard({ image, title, description, link, skills, demoUser }) {
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
                threshold: 0.2
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
            <a href={link} target="blank"><img className={styles.img} src={image} alt="project website" /></a>
            <h4 className={styles.title}>{title}</h4>
            {link && <a className={`btn ${styles.action}`} href={link} target='blank'>View Project</a>}
            <p className={styles.description}>{description}</p>
            {demoUser && <div>
                <p>{demoUser.email}</p>
                <p>{demoUser.password}</p>
                </div>}
            <div className={styles.skills}>
                {skills && skills.map(skill => {
                    return <SkillTag skill={skill.skill} type={skill.type} key={skill.skill} />
                })}
            </div>
        </div>
    );
}

export default ProjectCard;