import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className={props.buttonClassName}onClick={props.buttonOnClick}>{props.buttonName}</button>
    </>
  )
}
export default Button