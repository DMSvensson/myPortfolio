import React from "react";
import styles from './SkillTag.module.css';
import { getSkillClassByType } from "../../utility/getStyles";
import { getSkillTag } from "../../utility/skills";

function SkillTag({skill}) {
    const skillTest = getSkillTag(skill);
    return <span className={`${styles.skill} ${getSkillClassByType(skillTest.type)}`}>{skillTest.skill}</span>
}

export default SkillTag;