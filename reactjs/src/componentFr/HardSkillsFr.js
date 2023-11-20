// src/components/Skills.js
import React from 'react';

const HardSkillsFr = () => {
  return (
    <div className="hard-skills">
      <table>
        <tr><td><h2>Compétences</h2></td></tr>
        <tr><b>Compétences techniques</b></tr>
        <tr><td><ul>
        <li>C#, XML, Python, SQL, PHP Symfony</li>
        <li>HTML, R, Agile(Scrum)</li>
        <li>ASP .Net, Java, JavaScript, Merise </li>
      </ul></td></tr>
      <tr><td><b>SoftSkills</b></td></tr>
        <tr><td><ol> 
        <li>Capacité d' adaptation</li>
        <li>Travail en équipe</li>
        <li>L'organisation</li></ol></td></tr>
        <tr><td><b>Langues</b></td></tr>
        <tr><td>
          <table>
        <tr><td width="30"></td><td>Francais </td><td>:</td><td>Courant</td></tr>
        <tr><td width="30"></td><td>Anglais</td><td>:</td><td>Courant</td></tr>
        <tr><td width="30"></td><td>Arabe</td><td>:</td><td>Langue Maternelle</td> </tr>
        </table>
        </td></tr>
      </table>
    </div>
  );
};

export default HardSkillsFr;
