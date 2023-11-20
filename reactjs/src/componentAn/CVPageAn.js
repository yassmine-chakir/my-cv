import React from 'react';
import ExperienceFr from './ExperienceAn';
import EducationFr from './EducationAn';
import PersonalInfoFr from './PersonalInfoAn';
import ProjectsFr from './ProjectsAn';
import HardSkillsFr from './HardSkillsAn';
const CVPageAn = () => {
  return (
    <div cclassName="container">
      <h1>Mon CV</h1>
      <PersonalInfoAn />
      <table><tr><td><EducationAn /> </td><td width="30"></td><td valign='top'> <ExperienceAn /></td></tr></table>
      <ProjectsAn />
      <HardSkillsAn />
    </div>
  );
};

export default CVPageAn;
