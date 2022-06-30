import React, { useState } from "react";
import AnimatePage from "./AnimatePage";
import VacancyList from "./VacancyList/VacancyList";

const Jobs = () => {
  // eslint-disable-next-line
  const [vacancyList, setVacancyList] = useState([
    {
      school: 'Besteiro MS',
      position: 'Head Choir Director',
      contactName: 'Melody Eriksen',
      contactNumber: '',
      contactEmail: 'mceriksen@bisd.us',
      district: 'Brownsville ISD'
    }
  ])
  return (
    <AnimatePage>
      <div className="notification is-info is-light m-4">
        <div className="">
          If your campus or district has a vacancy please let the{" "}
          <a href='mailto:jwhitney@bisd.us'><strong>site administrator</strong></a> know so that we can post the job
          and contact information.
          <br />
          Please let us know the following:<br />
          <strong>School</strong><br />
          <strong>Position</strong><br />
          <strong>Who to Contact (Name, Number, Email)</strong><br />
        </div>
      </div>
      <div className="section">
        <div className="content"> 
          <h1>Current Vacancies:</h1>
          <VacancyList info={vacancyList} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default Jobs;
