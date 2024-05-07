import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contianer from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <Router>
      <Navbar/>
      <Contianer customClass='min_height'>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path='/project/:id' element={<Project/>}/>
        </Routes>
      </Contianer>
      <Footer/>
    </Router>
  );
}

export default App;