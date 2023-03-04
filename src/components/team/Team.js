import React from 'react';
import './Team.css';
import volunteer1 from '../../assets/volunteer1.jpg';
import volunteer2 from '../../assets/volunteer2.jpg';
import volunteer3 from '../../assets/volunteer3.jpg';

const MeetOurTeam = () => {
  return (
    <div id="team-section" className="meet-our-team">
      <h1 className="meet-our-team__title">Meet Our Team</h1>
      <div className="meet-our-team__employees">
        <div className="meet-our-team__employee">
          <img src={volunteer1} alt="Employee 1" className="meet-our-team__employee-image" />
          <h2 className="meet-our-team__employee-title">Executive Director</h2>
        </div>
        <div className="meet-our-team__employee">
          <img src={volunteer2} alt="Employee 2" className="meet-our-team__employee-image" />
          <h2 className="meet-our-team__employee-title">Program Manager</h2>
        </div>
        <div className="meet-our-team__employee">
          <img src={volunteer3} alt="Employee 3" className="meet-our-team__employee-image" />
          <h2 className="meet-our-team__employee-title">Volunteer Coordinator</h2>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
