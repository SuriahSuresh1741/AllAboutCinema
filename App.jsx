import './App.css'
import {Route,Routes} from 'react-router-dom';

import Home from './pages/Home'
import Trending from "./pages/Trending"
import Details from './pages/Details'

function App() {
    return (<>
      {/* <Home /> */} 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Details />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
      </Routes>
    </>);
}


export default App
