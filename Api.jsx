import React, { useEffect, useState } from 'react'

const Api = () => {

    const [users, setUsers] = useState([]);
   
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        setUsers(await response.json());

        
    }

    useEffect(() =>{
        getUsers();
    }, []);
  return (
    <>
    <h2>List of github users</h2>
        
            {
                users.map((curElem) => {
                    return(
               
                    <div className='div_5'>
                        <div className='col'>
                        <span>{curElem.userId}</span><br/>
                        <span>{curElem.id}</span><br />
                        <span>{curElem.title}</span><br />
                        <span>{curElem.completed}</span><br />

                        </div>
                        {/* <div><img src='' className='rounded' width={155}/></div> */}
                        
                        
                        {/* <div className='div_8'></div>
                           <div className='div_8'><span className='span_1'>38</span></div>
                           <div className='div_8'><span className='span_1'>980</span></div>
                           <div className='div_8'>{curElem.completed}<span className='span_1'>8.9</span></div> */}
                    </div>
            
                    )
                })
            }
            
    </>
  )
}

export default Api