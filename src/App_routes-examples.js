
import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Notes = () => <h1>Notes Page</h1>

function App ()  { 
  
 
  return (
    <BrowserRouter>
    <React.Fragment>

        <header>
          <Link to='/home' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/notes' >Notes</Link>
        </header>
       {/* {getContent()}*/}
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      
    </React.Fragment>
    </BrowserRouter>
  )
}

 
export default App;