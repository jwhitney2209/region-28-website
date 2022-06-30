import React, { useState } from "react";
import AnimatePage from "./AnimatePage";
import DirectoryList from '../components/DirectoryList/DirectoryList';

const Directory = () => {
  // eslint-disable-next-line
  const [infoList, setInfoList] = useState([
    {school:'Lopez ECHS', name:'Jason Whitney', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Lopez ECHS', name:'Meagan Contreras', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Lopez ECHS', name:'Colin Minkler', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Veterans Memorial ECHS', name:'Travis Baldwin', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Veterans Memorial ECHS', name:'Iliana Guerrero', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Veterans Memorial ECHS', name:'Uzziel Guzman', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Rivera ECHS', name:'Patrick Graves', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Rivera ECHS', name:'Tiffany Gibson', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Rivera ECHS', name:'Sergio Godinez', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Hanna ECHS', name:'Ignacio Cruz III', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Hanna ECHS', name:'Karen Atkinson', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Hanna ECHS', name:'vacant', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Pace ECHS', name:'Joe Alvear', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Pace ECHS', name:'Elora Sanchez', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Pace ECHS', name:'Janna Ryan', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Porter ECHS', name:'Nohemi Loza de Juarez', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Porter ECHS', name:'Alain Fabela', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Los Fresnos HS', name:'Allen Juarez', position: 'Head Director', email:'', phone:'', address:''},
    {school:'San Benito HS', name:'Eradio Martinez', position: 'Head Director', email:'', phone:'', address:''},
    {school:'San Benito HS', name:'Anna Garcia', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Harlingen HS', name:'Ginger Wheelock', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Harlingen HS', name:'Alfonso Gonzalez', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Harlingen HS', name:'Ruben Reyna', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Harlingen South HS', name:'Jesus G. Morales', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Harlingen South HS', name:'Sylvia Flores', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Harlingen South HS', name:'Henry Tharpe', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'La Feria HS', name:'Randy Ashley', position: 'Head Director', email:'', phone:'', address:''},
    {school:'La Feria HS', name:'Nadya Cruz', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Weslaco HS', name:'Felipe Armando Morales', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Weslaco East HS', name:'Jeff Figueroa', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Donna HS', name:'Mindy Bersalona', position: 'Head Director', email:'', phone:'', address:''},
    {school:'Donna HS', name:'Cassandra Ramos', position: 'Assistant Director', email:'', phone:'', address:''},
    {school:'Donna HS', name:'Mike Ensign', position: 'Assistant Director/Accompanist', email:'', phone:'', address:''},
    {school:'Donna North HS', name:'Vicente Guerrero', position: 'Head Director', email:'', phone:'', address:''}
  ])
  return (
    <AnimatePage>
      <DirectoryList info={infoList} />
    </AnimatePage>
  );
};

export default Directory;
