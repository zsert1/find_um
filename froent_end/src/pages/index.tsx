import React from "react";
import { Route, Routes } from "react-router-dom";
import SingUp from "./account/signUp";

const Root=()=>{
    return(
        <Routes>
           
        <Route path='/signUp' Component={SingUp}></Route>
        <Route path='/'></Route>
        </Routes>
       
    )
}
export default Root