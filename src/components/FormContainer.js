import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import FirstStep from "./FirstStep";
import classes from "./FormContainer.module.css";
import LastStep from "./LastStep/LastStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from './ThirdStep/ThirdStep';


const FormContainer = () => {
    const updatedStep = useSelector(state => state.button.step)

  return (
    <div className={classes.FormContainer}>
      {updatedStep === 1 && <FirstStep />}
      {updatedStep === 2 && <SecondStep />}
      {updatedStep === 3 && <ThirdStep />}
      {updatedStep === 4 && <LastStep />}
    </div>
  );
};

export default FormContainer;
