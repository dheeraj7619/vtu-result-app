// import { Context } from "../App";

import {  createContext, useContext, useState } from "react";



 const Context = createContext();

 export const Contextt = () => useContext(Context)
 const  ContextProvider = ({children}) =>{
    let [studentData,setStudentData] =useState({}) 
    return (
        <Context.Provider value={{studentData,setStudentData}}>
            {children}
        </Context.Provider>
        
    )
}

export default ContextProvider;