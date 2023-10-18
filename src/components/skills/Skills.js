import React from "react";
import styles from './Skills.module.css';
import SkillTag from "../skillTag/SkillTag";

function Skills() {
    const skills = [
        { skill: 'Javascript', type: 'language' }, 
        { skill: 'Typescript', type: 'language' }, 
        { skill: 'HTML, CSS', type: 'language' },
        { skill: 'Java', type: 'language'},
        { skill: 'C#', type: 'language' }, 
        { skill: 'Angular', type: 'framework' }, 
        { skill: 'React', type: 'framework' }, 
        { skill: 'Ionic', type: 'framework' },
        { skill: 'Git', type: 'other'},
        { skill: 'Firebase', type: 'other' },
        { skill: 'Figma', type: 'other' }, 
        { skill: 'Sanity', type: 'other' },
        { skill: 'UWP', type: 'other' },
    ];

    const allSkills = [
        { title: 'Languages', backgroundColor: '#855E51', skills: skills.filter(skill => skill.type === 'language') },
        { title: 'Framework', backgroundColor: '#C46647', skills: skills.filter(skill => skill.type === 'framework') },
        { title: 'Other', backgroundColor: '#519A89', skills: skills.filter(skill => skill.type === 'other') },
    ];

    return (
        <article className={styles.skills}>
            <h3>Skills</h3>
            {allSkills.map(skill => {
                return (
                    <article style={{ background: skill.backgroundColor }} key={skill.title}>
                        <div className={styles.skillHeader}>
                            <h4>{skill.title}</h4>
                        </div>
                        <div className={styles.skillTags}>
                            {skill.skills.map(skill => {
                                return <SkillTag type={skill.type} skill={skill.skill} key={skill.skill} />
                            })}
                        </div>
                    </article>
                )
            })}
        </article>
    );
}

export default Skills;