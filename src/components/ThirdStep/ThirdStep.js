import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import classes from "./ThirdStep.module.css";
import { buttonActions } from "../../store/next-step-slice";
import ControlPanel from "../ControlPanel";
import Form from "../UI/Form";
import Header from "../UI/Header";

const ThirdStep = () => {
  const type = useSelector((state) => state.button.optionDetails.type);
  const [inputOneChecked, setInput1Checked] = useState(false);
  const [inputTwoChecked, setInput2Checked] = useState(false);
  const [inputThreeChecked, setInput3Checked] = useState(false);

  const dispatch = useDispatch();

  const typeYearly = type === "YR";

  const finishStep = () => {
    const checkedInputs = [
      {
        id: "e1",
        name: "Online service",
        price: typeYearly ? 10 : 1,
        checked: inputOneChecked,
      },
      {
        id: "e2",
        name: "Larger storage",
        price: typeYearly ? 10 : 1,
        checked: inputTwoChecked,
      },
      {
        id: "e3",
        name: "Customizable profile",
        price: typeYearly ? 10 : 1,
        checked: inputThreeChecked,
      },
    ].filter((input) => input.checked);
    console.log(checkedInputs);

    dispatch(buttonActions.addExtras(checkedInputs));
    dispatch(buttonActions.SubmitStep());
  };

  const stepBack = () => {
    dispatch(buttonActions.back());
  };

  const inputOneStyle = inputOneChecked
  ? { backgroundColor: "hsl(217, 100%, 97%)", borderColor: 'hsl(243, 100%, 62%)' }
  : { backgroundColor: "", borderColor: 'hsl(231, 11%, 63%)' }

  const inputTwoStyle = inputTwoChecked
  ? { backgroundColor: "hsl(217, 100%, 97%)", borderColor: 'hsl(243, 100%, 62%)' }
  : { backgroundColor: "", borderColor: 'hsl(231, 11%, 63%)' }

  const inputThreeStyle = inputThreeChecked
  ? { backgroundColor: "hsl(217, 100%, 97%)", borderColor: 'hsl(243, 100%, 62%)' }
  : { backgroundColor: "", borderColor: 'hsl(231, 11%, 63%)' }

  return (
    <Form>
      <div>
        <Header
          titleTxt={"Pick add-ons"}
          descriptionTxt={"Add-ons enchanse your gaming experience."}
        />
        <div className={classes.ThirdStepContainer}>
          <div
            className={classes.Container}
            style={inputOneStyle}
          >
            <label>
              <input
                className={classes.CheckBox}
                type="checkbox"
                onChange={() => setInput1Checked(!inputOneChecked)}
              />
            </label>
            <div className={classes.InputText}>
              <span>Online Service</span>
              <p>Acces to multiplayer games</p>
            </div>
            <span className={classes.Price}>
              {typeYearly ? "+$10/yr" : "+$1/mo"}
            </span>
          </div>

          <div
            className={classes.Container}
              style={inputTwoStyle}
            
          >
            <label>
              <input
                className={classes.CheckBox}
                type="checkbox"
                onChange={() => setInput2Checked(!inputTwoChecked)}
              />
            </label>
            <div className={classes.InputText}>
              <span>Larger Storage</span>
              <p>Acces to multiplayer games</p>
            </div>
            <span className={classes.Price}>
              {typeYearly ? "+10$/yr" : "+$1/mo"}
            </span>
          </div>

          <div
            className={classes.Container}
            style={inputThreeStyle}
          >
            <label>
              <input
                className={classes.CheckBox}
                type="checkbox"
                onChange={() => setInput3Checked(!inputThreeChecked)}
              />
            </label>
            <div className={classes.InputText}>
              <span>Customisable profile</span>
              <p>Acces to multiplayer games</p>
            </div>
            <span className={classes.Price}>
              {typeYearly ? "+$10/yr" : "+$1/mo"}
            </span>
          </div>
        </div>
      </div>
      <ControlPanel
        text="Next Step"
        onClickNext={finishStep}
        onClickBack={stepBack}
      />
    </Form>
  );
};

export default ThirdStep;
