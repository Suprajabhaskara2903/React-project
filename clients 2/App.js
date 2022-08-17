
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import {fetchAllQuestions} from './actions/question'

// fetchallquestions is a get request from the data base

function App() {

  const dispatch = useDispatch()
  useEffect( () =>{
    dispatch(fetchAllQuestions())

  }, [dispatch])
  // [] is dependency array
  return (
    <div className="App">
      <Router>
            <Navbar/>
            <AllRoutes/>
      </Router>
    </div>
  );
}



export default App;


// when ever app is in live useeffect function runs
