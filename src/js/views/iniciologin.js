
import React, {useEffect, useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"




export const Form = () => {

	const[email,setEmail]=useState("")
	const[password,setPassword]=useState("")
	const {store, actions}=useContext(Context)
 
	function enviarDatos(e) {
	 e.preventDefault()
	 actions.inicioLogin(email, password)
	 setEmail("")
	 setPassword("")
    //   fetch('https://3000-agustinaf18-autentifica-oajyma3jxwp.ws-us84.gitpod.io/login',{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //     body: JSON.stringify({"email":email,"password":password}) // body data type must match "Content-Type" header
    // })
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((err)=>console.log(err))
	}
 
 
 //    if (condition) {//true
 //     //bloque de codigo
 //    }else{//false
 // //bloque de codigo
 //    }
 
 // condition ? bloque de codigo si es true : bloque de codigo si es false
 
 // store.auth === true ? <Navigate to="/ruta hacia donde ir"/> : <Formulario/>
	
   return (
	 <>
         {/* // //si estlogueado es true entonces lo va a llevar al home si no loo devuelve al formulario los dos puntitos : son el else */}
	 {store.estalogueado === true ? <Navigate to= "/home" />:
	 <form className="w-50 mx-auto" onSubmit={enviarDatos}>
	   <div className="mb-3 container">
		 <label htmlFor="exampleInputEmail1" className="form-label">
		   Email address
		 </label>
		 <input
		   type="email"
		   className="form-control"
		   id="exampleInputEmail1"
		   aria-describedby="emailHelp"
		   value={email}
		   onChange={(e)=>setEmail(e.target.value)}
		 />
	   </div>
	   <div className="mb-3">
		 <label htmlFor="exampleInputPassword1" className="form-label">
		   Password
		 </label>
		 <input
		   type="password"
		   className="form-control"
		   id="exampleInputPassword1"
		   value={password}
		   onChange={(e)=>setPassword(e.target.value)}
		 />
	   </div>
	   <button type="submit" className="btn btn-primary">
		 Submit
	   </button>
	 </form>}
	 </>
	 
   );
 };
 
 

//1 despues que estamos en el login como principal, vamos al flux creamos la funcion inicioLogin 
//2 vamos a nuestro componente inicioLogin y hacemos el fetch para la funcion que acabamos de crear aca en el componente 
//3 despues utilizamos actions.inicioLogin() en el componente para utilizar la funcion, actions porque esta en el flux