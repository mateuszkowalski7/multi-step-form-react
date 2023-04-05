import { useSelector, useDispatch } from "react-redux";
import React, { useState, Fragment } from "react";
import classes from "./LastStep.module.css";
import ControlPanel from "../ControlPanel";
import { buttonActions } from "../../store/next-step-slice";
import ConfirmedPage from "./ConfirmedPage";
import Form from "../UI/Form";
import Header from "../UI/Header";

const LastStep = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const chosenType = useSelector((state) => state.button.optionDetails.type);
  const chosenExtras = useSelector((state) => state.button.extrasDetails);
  const chosenProgram = useSelector(
    (state) => state.button.optionDetails.programName
  );
  const chosenProgramPrice = useSelector(
    (state) => state.button.optionDetails.programPrice
  );
  const typeYearly = chosenType === "YR";
  const extrasPrice = chosenExtras.reduce((acc, cv) => {
    return acc + cv.price;
  }, 0);
  const programPrice = useSelector(
    (state) => state.button.optionDetails.programPrice
  );
  const dispatch = useDispatch();
  const totalPrice = extrasPrice + programPrice;

  const changeProgramHandler = () => {
    console.log("elo");
    dispatch(buttonActions.change());
  };

  const stepBack = () => {
    dispatch(buttonActions.back());
  };

  const confirmHandler = () => {
    setIsConfirmed(true);
  };
  return (
    <>
      <Form>
        {!isConfirmed && (
          <Fragment>
            <div>
              <Header
                titleTxt={"Finishing up"}
                descriptionTxt={
                  " Double-check everythig looks OK before confirming."
                }
              />
              <div className={classes.chosenContainer}>
                <div
                  className={classes.chosenOptions}
                  style={
                    chosenExtras.length === 0
                      ? { borderBottom: "none" }
                      : { borderBottom: "1px solid grey" }
                  }
                >
                  <div className={classes.chosenProgram}>
                    <div className={classes.chosenProgramName}>
                      <span className={classes.chosenProgramName}>
                        {chosenProgram}
                      </span>
                    </div>
                    <p
                      className={classes.changeProgramBtn}
                      onClick={changeProgramHandler}
                    >
                      change
                    </p>
                  </div>
                  <div className={classes.chosenProgramPrice}>
                    ${chosenProgramPrice}/{typeYearly ? "yr" : "mo"}
                  </div>
                </div>
                {chosenExtras.length > 0 && (
                  <div className={classes.chosenExtras}>
                    <div className={classes.chosenExtrasName}>
                      {chosenExtras.map((extras) => (
                        <span key={extras.id}>{extras.name}</span>
                      ))}
                    </div>
                    <div className={classes.chosenExtrasPrice}>
                      {chosenExtras.map((extras) => (
                        <span key={extras.id}>
                          +${extras.price}/{typeYearly ? "yr" : "mo"}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={classes.TotalPrice}>
                <p className={classes.TotalParagraph}>
                  Total {typeYearly ? "(per Year)" : "(per Month)"}
                </p>
                <span>
                  +${totalPrice}/{typeYearly ? "yr" : "mo"}
                </span>
              </div>
            </div>
            {!isConfirmed && (
              <ControlPanel
                text="Confirm"
                onClickBack={stepBack}
                onClickNext={confirmHandler}
              />
            )}
          </Fragment>
        )}
        {isConfirmed && <ConfirmedPage />}
      </Form>

      <div></div>
    </>
  );
};

export default LastStep;
