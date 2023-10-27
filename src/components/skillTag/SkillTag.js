import React from "react";
import styles from './SkillTag.module.css';
import { getSkillClassByType } from "../../utility/getStyles";

function SkillTag({skill, type}) {
    return <span className={`${styles.skill} ${getSkillClassByType(type)}`}>{skill}</span>
}

export default SkillTag;