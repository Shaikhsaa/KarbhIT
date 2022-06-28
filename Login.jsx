import React from 'react'
import Button from '../../Components/Button'

const Login = () => {
  return (
      <>
    <div className='loginlogo'> Karbh IT Solutions</div>

    <div className='login'>
      <div className='loginpage'>
      <h1>signin</h1>
      
      <input type ="phoneNumber" placeholder='phoneNumber'/><br/>
      <input type ="password" placeholder='PassWord'/><br/>
    <Button buttonName="signIn" buttonOnClick={()=>{
        localStorage.setItem('isLogin',true)
        window.location.reload()
        
    }} buttonClassName = "btn btn-outline-success"/>
    </div>
    </div>
    </>
    




    




  )

}

export default Login