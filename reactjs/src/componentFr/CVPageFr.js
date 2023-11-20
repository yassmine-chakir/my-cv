import React from 'react';
import ExperienceFr from './ExperienceFr';
import EducationFr from './EducationFr';
import PersonalInfoFr from './PersonalInfoFr';
import ProjectsFr from './ProjectsFr';
import HardSkillsFr from './HardSkillsFr';
const CVPageFr = () => {
  return (
    <div cclassName="container">
      <h1>Mon CV</h1>
      <PersonalInfoFr />
      <table><tr><td><EducationFr /> </td><td width="30"></td><td valign='top'> <ExperienceFr /></td></tr></table>
      <ProjectsFr />
      <HardSkillsFr />
    </div>
  );
};

export default CVPageFr;
