import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classes from "./FirstStep.module.css";
import { buttonActions } from "../store/next-step-slice";
import Form from "./UI/Form";
import Header from "./UI/Header";

const FirstStep = () => {
  const option1 = useSelector((state) => state.button.optionDetails);
  const option2 = useSelector((state) => state.button.extrasDetails);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [numberIsValid, setNumberIsValid] = useState(true);
  const dispatch = useDispatch();

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const numberInputHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const onBlurHandler = () => {
    if (enteredName !== "") {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }

    if (enteredEmail.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    if (enteredNumber.length >= 9) {
      setNumberIsValid(true);
    } else {
      setNumberIsValid(false);
    }
  };

  const finishStep = () => {
    if (enteredName !== "") {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }

    if (enteredEmail.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    if (enteredNumber.length !== "" && enteredNumber.length > 8) {
      setNumberIsValid(true);
    } else {
      setNumberIsValid(false);
      return;
    }

    if (enteredName && enteredEmail && enteredNumber) {
      dispatch(buttonActions.SubmitStep());
      console.log("o1", option1);
      console.log("o2", option2);
    } else {
      return;
    }
  };

  const invalidNumberMessage =
    (enteredNumber === "" && "This field is required") ||
    (enteredNumber >= 0 && enteredNumber.length < 9 && "Number is too short");

  return (
    <>
      <Form>
        <div className={classes.test}>
          <form>
            <div>
            <Header
              titleTxt={"Personal info"}
              descriptionTxt={
                "Please provide your name, email address and phone number"
              }
            />
            </div>
            <div className={classes.FormControl}>
              <div className={classes.LabelContainer}>
                <label>Name</label>
                {!nameIsValid && (
                  <p className={classes.ErrorAlert}>This field is required.</p>
                )}
              </div>

              <input
                className={!nameIsValid ? `${classes.invalid}` : ""}
                onBlur={onBlurHandler}
                type="text"
                placeholder="e.g.Stephen King"
                value={enteredName}
                onChange={nameInputHandler}
              />
            </div>
            <div className={classes.FormControl}>
              <div className={classes.LabelContainer}>
                <label>Email Address</label>
                {!emailIsValid && (
                  <p className={classes.ErrorAlert}>
                    Entered address email is invalid.
                  </p>
                )}
              </div>

              <input
                className={!emailIsValid ? `${classes.invalid}` : ""}
                onBlur={onBlurHandler}
                type="text"
                placeholder="e.g.stephenking@gmail.com"
                value={enteredEmail}
                onChange={emailInputHandler}
              />
            </div>
            <div className={classes.FormControl}>
              <div className={classes.LabelContainer}>
                <label>Phone Number</label>
                {!numberIsValid && (
                  <p className={classes.ErrorAlert}>{invalidNumberMessage}</p>
                )}
              </div>

              <input
                className={!numberIsValid ? `${classes.invalid}` : ""}
                onBlur={onBlurHandler}
                type="number"
                placeholder="e.g.505 621 867"
                value={enteredNumber}
                onChange={numberInputHandler}
              />
            </div>
          </form>
          <div className={classes.ControlContainer}>
            <button className={classes.SubmitForm} onClick={finishStep}>
              Next Step
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FirstStep;
