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
    { skill: 'Node.js', type: 'other'},
    { skill: 'Express', type: 'framework'},
    { skill: 'Azure SQL', type: 'other'},
    { skill: 'Kotlin', type: 'language'}
];

const allSkills = [
    { title: 'Languages', type: 'language', skills: skills.filter(skill => skill.type === 'language') },
    { title: 'Framework', type: 'framework', skills: skills.filter(skill => skill.type === 'framework') },
    { title: 'Other', type: 'other', skills: skills.filter(skill => skill.type === 'other') },
];

export function getSkillTag(skillName) {
    const skill = skills.find(skill => skill.skill.toLowerCase() === skillName.toLowerCase());
    if(skill == null) {
        return {skill: skillName, type: 'other'};
    }
    return skill;
}

export function getAllSkills() {
    return allSkills;
}