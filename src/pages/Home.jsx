import React from "react";
import AnimatePage from "../components/AnimatePage";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <AnimatePage>
      <div>
        <article className="notification is-info is-light m-4">
          <div className="">
            Welcome to the new Region 28 Vocal Division website! Please take
            time to click around the site and explore!
          </div>
        </article>
        <section className="section">
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">TMEA Region 28 Vocal Division</h2>
          <p className="">
            <strong>Chair:</strong> Mindy Bersalona, Donna High School
            <br />
            <strong>Vice-Chair:</strong> Travis Baldwin, Veterans Memorial ECHS
            <br />
            <strong>Secretary/Treasurer:</strong> Tiffany Gibson, Rivera ECHS
            <br />
            <br />
            <strong>Middle School Chair:</strong> Robert Sanchez, Garcia MS
            <br />
            <strong>Middle School Vice-Chair:</strong> Katia Mares, Garcia MS
            <br />
            <strong>Middle School Treasurer:</strong> Vanessa Lopez-Torres,
            Vernon MS
            <br />
            <strong>Middle School Secretary:</strong> Rebecca Albritton,
            Memorial MS
            <br />
            <br />
            <button className="button is-link is-outlined" disabled>
              <HiDownload />
              Region 28 Handbook
            </button>
            <br />
            <br />
            Navigate to the menu option to find information on different
            sections of the website.
            <br />
            <br />
            <strong>Calendar</strong> will have the region's calendar of events
            with registration and payment postmark deadlines for TMEA and UIL
            Events.
            <br />
            <br />
            <strong>Directory</strong> will have a list of school contact
            information for all middle school and high school campuses within
            the region. If your contact information is not up to date please{" "}
            <a href="mailto:jwhitney@bisd.us" alt="email">
              {" "}
              email the site administrator here.
            </a>
            <br />
            <br />
            <strong>High School</strong> and <strong>Middle School</strong>{" "}
            division tabs will have information, handbooks, and announcements
            specific to the division.
          </p>
        </section>
      </div>
    </AnimatePage>
  );
};

export default Home;
