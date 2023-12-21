import React from "react";
import styles from './Skills.module.css';
import SkillTag from "../skillTag/SkillTag";
import { getSkillClassByType } from "../../utility/getStyles";
import { getAllSkills } from "../../utility/skills";

function Skills() {
    return (
        <article className={styles.skills}>
            <h3>Skills</h3>
            {getAllSkills().map(skill => {
                return (
                    <article className={`${styles.skill} ${getSkillClassByType(skill.type)}`} key={skill.title}>
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