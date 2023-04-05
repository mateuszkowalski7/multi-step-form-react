import React from "react";
import classes from "./Form.module.css";
import { useSelector } from "react-redux";

const Form = (props) => {
  const updatedStep = useSelector((state) => state.button.step);
  return (
    <div className={classes.Test}>
      <div className={classes.PageNumber}>
        <div className={classes.test1}>
          <div className={classes.numberContainer}>
            <div
              className={classes.Number}
              style={
                updatedStep === 1
                  ? { backgroundColor: "beige", color: "black" }
                  : { backgroundColor: "transparent", color: "white" }
              }
            >
              1
            </div>
          </div>
          <div className={classes.NumberContent}>
            <span>Step 1</span>
            <p>Your Info</p>
          </div>
        </div>

        <div className={classes.test1}>
          <div className={classes.numberContainer}>
            <div
              className={classes.Number}
              style={
                updatedStep === 2
                  ? { backgroundColor: "beige", color: "black" }
                  : { backgroundColor: "transparent", color: "white" }
              }
            >
              2
            </div>
          </div>
          <div className={classes.NumberContent}>
            <span>Step 2</span>
            <p>Select Plan</p>
          </div>
        </div>
        <div className={classes.test1}>
          <div className={classes.numberContainer}>
            <div
              className={classes.Number}
              style={
                updatedStep === 3
                  ? { backgroundColor: "beige", color: "black" }
                  : { backgroundColor: "transparent", color: "white" }
              }
            >
              3
            </div>
          </div>
          <div className={classes.NumberContent}>
            <span>Step 3</span>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className={classes.test1}>
          <div className={classes.numberContainer}>
            <div
              className={classes.Number}
              style={
                updatedStep === 4
                  ? { backgroundColor: "beige", color: "black" }
                  : { backgroundColor: "transparent", color: "white" }
              }
            >
              4
            </div>
          </div>
          <div className={classes.NumberContent}>
            <span>Step 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
      <div className={classes.GlobalContainer}>
        {props.children}
      </div>
    </div>
  );
};
export default Form;
