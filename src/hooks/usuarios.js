import React, { useState } from 'react'

export const usuarios = () => {
  
  const [users,setUsers]=useState([
    {
        username:'sebastian',
        password: '123456',
        email:'sebas10perez11@gmail.com'
    }
  ]);

    //validacion de usuario   
  const login=(username, password)=>{
    const user = users.find(user =>user.username === username && user.password===password);
    return user ? true  : false
  }

  const registro = (username,password,email) =>{

      setUsers([...users,(username,password,email)])
      
  }

    
    return{login,registro,users};
  
};
