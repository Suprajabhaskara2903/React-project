import React from "react";

// we wrap routes inisde switch
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth'

const AllRoutes = () => {
    return (
       <Routes>
           <Route exact path = '/' component = {Home}/>
           <Route exact path = '/Auth' component = {Auth}/>


       </Routes>
      
    )

}

export default AllRoutes