import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Navbar from './NavBar'

function App() {

    return(
            <BrowserRouter>
            <div className='App'>
            <Navbar />
        <Routes>
        <Route exact path='/Home' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        </Routes>
        </div>
        </BrowserRouter>
)
}


export default App;