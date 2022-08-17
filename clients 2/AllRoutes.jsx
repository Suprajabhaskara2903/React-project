import React from "react";

// we wrap routes inisde switch
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth'
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";

const AllRoutes = () => {
    return (
       <Routes>
           {/* <Route exact path = '/' component = {Home}/> */}
           <Route  path = '/' element = {<Home />}/>
           <Route  path = '/Auth' element = {<Auth />}/>
           <Route  path = '/Questions' element = {<Questions />}/>
           <Route  path = '/AskQuestion' element = {<AskQuestion />}/>
           <Route  path = '/Questions/:id' element = {<DisplayQuestion />}/>




           {/* <Route exact path = '' */}




       </Routes>
      
    )

}

export default AllRoutes