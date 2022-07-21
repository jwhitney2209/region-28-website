import React from "react";
import AnimatePage from "./AnimatePage";
import calendar from '../../src/assets/calendar.png'

const Calendar = () => {
  return (
    <AnimatePage>
      <article className="m-4">
        <div className="mb-4 has-text-centered">
          <a className="button is-danger is-outlined" href="https://drive.google.com/file/d/1w65skbr7DBAnRVbdOnWzzobN0B0YX5UO/view?usp=sharing" target="_blank" without rel="noreferrer">Download Calendar</a>
        </div>
        <div>
          <img alt="calendar" src={calendar} />
          <br />
        </div>
      </article>
    </AnimatePage>
  );
};

export default Calendar;
