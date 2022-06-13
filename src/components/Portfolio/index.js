import React from "react";
import TriviaPage from "../../assets/Triviapage.png";
import BTS from "../../assets/BetterThanStack.png";
import NoteTaker from "../../assets/NoteTaker.png";
import RunBuddy from "../../assets/runbuddy.png";
import WorkDay from "../../assets/WorkDayScheduler.png";
import TeamMembers from "../../assets/GenerateTeamMembers.png";

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <a href="https://jsplish.github.io/Try-My-Trivia/">
        <img src={TriviaPage} alt="trivia quiz" />
      </a>
      <a href="https://betterthanstack.herokuapp.com/">
        <img
          src={BTS}
          alt="single black pawn against an entire white chess set"
        />
      </a>
      <a href="https://salty-lake-88998.herokuapp.com/">
        <img src={NoteTaker} alt="NoteTaker App with to-do list items" />
      </a>

      <a href="https://github.com/rochelledavis/run-buddy">
        <img src={RunBuddy} alt="Road with a runner tying her shoe" />
      </a>
      <br></br>
      <a href="https://rochelledavis.github.io/scheduler-c5/">
        <img src={WorkDay} alt="Work Day Scheduler" />
      </a>
      <a href="https://github.com/rochelledavis/generate-team-members">
        <img src={TeamMembers} alt="Organization Team Members Tracker" />
      </a>
    </div>
  );
}

export default Portfolio;
