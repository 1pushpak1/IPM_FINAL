import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/common/Navbar/Navbar"
import MentorshipCourses from "./components/new/MentorshipCourses"
import classroom from "./components/new/classroom"
import shortterm from "./components/new/shortterm"
import testseries from "./components/new/testseries"

import IimIndroreForm from "./components/new/IimIndroreForm"
import { online } from "./dummydata"


function App() {
  return (
    <>  
    <Router>
      <div > <Navbar/></div>
   
  
      <div>
       <nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/mentorship' component={MentorshipCourses} />
          <Route exact path='/classroom' component={classroom} />
          
          <Route exact path='/short-term' component={shortterm} />
          <Route exact path='/testseries' component={testseries} />
          <Route exact path='/iimindoreform' component={IimIndroreForm} />
        </Switch>
        </nav>
        </div>
        
        <Footer />
      
        </Router>
    </>
  )
}

export default App
