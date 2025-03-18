import "animate.css";
import { useEffect, useState } from "react";

interface Props {
  setFinishedTutorial: React.Dispatch<React.SetStateAction<boolean>>;
}

const TutorialCard = ({ setFinishedTutorial }: Props) => {
  const [tutorialPage, setTutorialPage] = useState(0);

  const handleTutorialNext = () => {
    setTutorialPage((prev) => prev + 1);
  };

  const handleTutorialBack = () => {
    setTutorialPage((prev) => prev - 1);
  };

  useEffect(() => {
    if (tutorialPage === 6) {
      setFinishedTutorial(true);
    }
  }, [tutorialPage]);

  return (
    <div className="note-card tutorial-card" style={{ textAlign: "center" }}>
      {tutorialPage === 0 && (
        <div>
          <h1 className="lisu-bosa-regular">Welcome to Potluck Planner!</h1>
          <p>Would you like to go through the tutorial?</p>
          <hr className="half-hr"></hr>
          <div className="tutorial-btn-group">
            <button
              className="tutorial-button"
              onClick={() => setFinishedTutorial(true)}
            >
              No
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Yes
            </button>
          </div>
        </div>
      )}
      {tutorialPage === 1 && (
        <div className="animate__animated animate__backInLeft">
          <h1 className="lisu-bosa-regular">Okay let's get started! </h1>
          <hr className="half-hr"></hr>
          <div className="tutorial-btn-group">
            <button className="tutorial-button" onClick={handleTutorialBack}>
              Back
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Next
            </button>
          </div>
        </div>
      )}
      {tutorialPage === 2 && (
        <div
          className="animate__animated animate__backInLeft"
          style={{ bottom: "0" }}
        >
          <h1 className="lisu-bosa-regular">Important Information </h1>
          <p>
            You can put the address, date, and any potential food allergies in
            the section at the top of the page!
          </p>
          <hr className="half-hr"></hr>
          <div className="tutorial-btn-group">
            <button className="tutorial-button" onClick={handleTutorialBack}>
              Back
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Next
            </button>
          </div>
        </div>
      )}
      {tutorialPage === 3 && (
        <div className="animate__animated animate__backInLeft">
          <h1 className="lisu-bosa-regular">What's on the table?</h1>
          <hr className="half-hr"></hr>
          <p>
            There are sections for appetizers, entrees, and drinks. When you add
            dishes to these categories, you can also assign it to specific
            people along with portions.
          </p>
          <div className="tutorial-btn-group">
            <button className="tutorial-button" onClick={handleTutorialBack}>
              Back
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {tutorialPage === 4 && (
        <div className="animate__animated animate__backInLeft">
          <h1 className="lisu-bosa-regular">Who's invited? </h1>
          <p>
            Enter all the emails of the people you want to invite! If you choose
            to send check the email option, they'll get a link to this planner
            so they can see it and add anything they want. The reminder option
            will send additional email reminders a day before the event date.
          </p>
          <hr className="half-hr"></hr>
          <div className="tutorial-btn-group">
            <button className="tutorial-button" onClick={handleTutorialBack}>
              Back
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {tutorialPage === 5 && (
        <div className="animate__animated animate__backInLeft">
          <h1 className="lisu-bosa-regular">That's all! </h1>
          <p>You're ready to plan the perfect potluck!</p>
          <hr className="half-hr"></hr>
          <div className="tutorial-btn-group">
            <button className="tutorial-button" onClick={handleTutorialBack}>
              Back
            </button>
            <button className="tutorial-button" onClick={handleTutorialNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialCard;
