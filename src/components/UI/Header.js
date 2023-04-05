import React from 'react'
import classes from './Header.module.css'

const Header = ({titleTxt, descriptionTxt}) => {
  return (
    <div className={classes.HeaderContainer}>
       <h1 className={classes.Title}>{titleTxt}</h1>
      <p className={classes.Description}>{descriptionTxt}</p>
    </div>
  )
}

export default Header
