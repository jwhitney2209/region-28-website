import React, { useState } from "react";
import AnimatePage from "../components/AnimatePage";
import VacancyList from "../components/VacancyList/VacancyList";

const Jobs = () => {
  // eslint-disable-next-line
  const [vacancyList, setVacancyList] = useState([{}])
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
          {vacancyList.lenghth ? <VacancyList info={vacancyList} /> : <p>No reported vacancies at this time.</p>}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Jobs;
