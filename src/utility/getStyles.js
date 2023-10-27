import styles from '../assets/styles/skills.module.css';

export function getSkillClassByType(type) {
    if (type === 'language') {
        return styles.language;
    } else if (type === 'framework') {
        return styles.framework;
    } else {
        return styles.other;
    }
}