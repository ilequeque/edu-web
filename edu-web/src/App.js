import React from 'react'
import "./App.css"
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route exact path='/courses' component={CourseHome} />
            <Route exact path='/journal' component={Blog} />
            <Route exact path='/contact' component={Contact} />
         </Switch>
      </Router>
    </>
  )
}

export default App
