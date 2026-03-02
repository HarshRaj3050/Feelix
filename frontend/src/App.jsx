import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from "./pages/CreatePost"
import Feed from './pages/Feed';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}></Route>
        <Route path='/feed' element={<Feed />}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App