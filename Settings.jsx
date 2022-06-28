import React from 'react'
import Button from './Button'
const Settings = () => {
    return (
        <>
        <h1>Sign out</h1>
        <Button buttonName='SignOut' buttonOnClick={()=>{
        localStorage.removeItem("isLogin")
        window.location.reload()
      }} buttonClassName = "btn btn-outline-danger"/>
        </>
      )
}

export default Settings;