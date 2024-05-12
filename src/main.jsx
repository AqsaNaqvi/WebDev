import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='User/:Userid' element={<User/>}/>
       <Route path='github' element={<Github/>}/>
       
    
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
