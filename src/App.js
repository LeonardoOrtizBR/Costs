import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contianer from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <Router>
      <Navbar />
      <Contianer customClass='min_height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Contianer>
      <Footer />
    </Router>
  );
}

export default App;
