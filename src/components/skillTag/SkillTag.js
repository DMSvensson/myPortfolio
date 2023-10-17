import React from "react";
import styles from './SkillTag.module.css';

const getClassByType = ((type) => {
    if(type === 'languages') {
        return styles.language;
    } else if(type === 'framework') {
        return styles.framework;
    } else {
        return styles.other;
    }
});

function SkillTag({skill, type}) {
    return <span className={`${styles.skill} ${getClassByType(type)}`}>{skill}</span>
}

export default SkillTag;