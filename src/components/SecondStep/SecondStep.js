import { useDispatch, useSelector } from "react-redux";
import classes from "./SecondStep.module.css";
import Options from "./Options";
import ControlPanel from "../ControlPanel";
import { buttonActions } from "../../store/next-step-slice";
import Form from "../UI/Form";
import Header from "../UI/Header";

const SecondStep = () => {
  const dispatch = useDispatch();
  const optionChosen = useSelector((state) => state.button.optionDetails);
  const option2 = useSelector((state) => state.button.extrasDetails);

  const finishStep = () => {
    console.log("o1", optionChosen);
    console.log("o2", option2);
    if (optionChosen) {
      dispatch(buttonActions.SubmitStep());
    } else {
      console.log("error");
    }
  };

  const stepBack = () => {
    dispatch(buttonActions.back());
  };

  return (
    <Form>
      <div>
        <Header
          titleTxt={"Select your plan"}
          descriptionTxt={"You have the option of monthly or yearly billing."}
        />
        <Options />
        </div>
        <div className={classes.ControlContainer}>
          <ControlPanel
            text="Next Step"
            onClickNext={finishStep}
            onClickBack={stepBack}
            isDisabled={optionChosen ? false : true}
          />
        </div>
    </Form>
  );
};

export default SecondStep;
