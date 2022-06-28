import React from 'react'

const Footer = (props) => {
  return (
    <footer className={props.footerClassName}>{props.footerName}</footer>
    // <div>@SoftCodes</div>
  )
}

export default Footer