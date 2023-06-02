import React from 'react'
import "./App.css"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Signup from './components/login/register'
import StudentDashboard from './components/dashboards/StudentDashboard'
import TeacherDashboard from './components/dashboards/TeacherDashboard'
import ChemistryMaterials from "./components/materials/ChemistryMaterials";

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
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/student-dashboard' component={StudentDashboard} />
          <Route exact path='/teacher-dashboard' component={TeacherDashboard} />
          <Route path="/courses/химия" component={ChemistryMaterials} />
         </Switch>
         <Footer />
      </Router>
    </>
  )
}

export default App
