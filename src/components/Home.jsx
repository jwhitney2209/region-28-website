import React from "react";
import AnimatePage from "./AnimatePage";

const Home = () => {
  return (
    <AnimatePage>
      <div>
        <section class="section">
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">TMEA Region 28 Vocal Division</h2>
          <p className="subtitle is-6">
            Chair: Mindy Bersalona, Donna High School
            <br />
            Vice-Chair: Travis Baldwin, Veterans Memorial ECHS
            <br />
            Secretary/Treasurer: Tiffany Gibson, Rivera ECHS
            <br />
            <br />
            <br />
            Navigate to the menu option to find information on different sections
            of the website.
            <br />
            <br />
            <strong>Calendar</strong> will have the region's calendar of events
            with registration and payment postmark deadlines for TMEA and UIL
            Events.
            <br />
            <br />
            <strong>Directory</strong> will have a list of school contact
            information for all middle school and high school campuses within the
            region. If your contact information is not up to date please <a href="mailto:jwhitney@bisd.us" alt="email"> email
            the site administrator here.
            </a>
          </p>
        </section>
      </div>
    </AnimatePage>

  );
};

export default Home;
