import React from 'react'
import classes from './ControlPanel.module.css'

const ControlPanel = ({onClickBack, onClickNext, text, isDisabled}) => {
  return (
    <div className={classes.ControlContainer}>
      <button className={classes.BackBtn} onClick={onClickBack}>Go Back</button>
      <button className={classes.NextBtn} onClick={onClickNext} disabled={isDisabled ? true : false} style={isDisabled ? {backgroundColor: 'hsl(231, 11%, 63%)'} : {backgroundColor: 'hsl(213, 96%, 18%)'}}>{text}</button>
    </div>
  )
}

export default ControlPanel
