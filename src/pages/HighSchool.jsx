import React, { useState } from "react";
import AnimatePage from "../components/AnimatePage";
import SongList from "../components/SongList/SongList";

const HighSchool = () => {
  // eslint-disable-next-line
  const [songList, setSongList] = useState([
    {
      id: 1,
      title: "Tshotsholoza",
      composer: "Jeffery L. Ames",
      publisher: 'Walton Music',
      penders: "https://www.penders.com/p-136035-tshotsholoza.aspx",
      pepper: "https://www.jwpepper.com/10276407.item#.Yr3F1nbMJD8",
    },
    {
      id: 2,
      title: "Sing To Me",
      composer: "Reginal Wright",
      publisher: 'Santa Barbara Music Publishing',
      penders: "https://www.penders.com/p-704830-sing-to-me.aspx",
      pepper: "https://www.jwpepper.com/Sing-to-Me/11196481.item#.Yr3GO3bMJD8",
    },
    {
      id: 3,
      title: "Zion's Walls",
      composer: "Copeland/Koponen",
      publisher: 'Boosey & Hawkes, Inc',
      penders: "https://www.penders.com/p-146393-zions-walls.aspx",
      pepper: "https://www.jwpepper.com/Zion%27s-Walls/1478338.item#.Yr3GWnbMJD8",
    },
    {
      id: 4,
      title: "Gloria in excelsis Deo",
      composer: "Antonio Vivaldi/Thomas",
      publisher: 'Lorenz Coproration',
      penders: "https://www.penders.com/p-151821-gloria-in-excelsis-deo.aspx",
      pepper: "https://www.jwpepper.com/Gloria-in-Excelsis-Deo/1595453.item#.Yr3GeHbMJD8",
    },
  ]);
  return (
    <AnimatePage>
      <div className="notification is-info is-light m-4">
        <div className="">
          <strong>Attention Directors!</strong>
          <br />
          Vocal tracks are currently being recorded for the Region Mixed Honor
          Choir. Links to the tracks will be posted here when they are ready.
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h1>Region 28 Mixed Honor Choir</h1>
          <h3>Conductor: Cynthia Douglas, Cypress Ranch HS, Cypress, TX</h3>
          <h4>Selections</h4>
          <SongList song={songList} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default HighSchool;
