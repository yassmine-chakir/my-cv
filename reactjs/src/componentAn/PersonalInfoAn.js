import React from 'react';
import photo from '../photo.jpeg';

const PersonalInfoAn = () => {
  return (
    <div className="personal-info-fr">
      <table>
        <tr>
          <td></td>
          <td width="20"></td>
          <td><h2>Yassmine chakir</h2></td>

        </tr>
        <tr>
          <td><img src={photo} alt="ma" width="150" height="180"/></td>
          <td width="20"></td>
          <td valign='top' width="500">Actuellement étudiante en Master 2 MIASHS avec une spécialisation en web analytics, je suis à la recherche d'un stage de 6 mois en tant que data analyst, à partir du 1er février 2024. Passionnée par ce domaine en constante évolution, je suis vivement enthousiaste à l'idée de mettre en pratique les compétences acquises au cours de ma formation au sein de votre entreprise.</td>
        </tr>
        <tr>
          <td>+33 6 12 34 56 78</td>
          <td width="20"></td>
          <td>
            <table><tr><td> yassminechak10@gmail.com </td><td width="20"></td> <td>Villeneuve-d'Ascq</td></tr></table>
               </td>
        </tr>
      </table>
    </div>
  );
};

export default PersonalInfoAn;
