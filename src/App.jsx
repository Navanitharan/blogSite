import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import All from './All';
import FullstackCard from './Fullstack';
import Datascience from './DatascienceCource';
import Cybersecurity from "./CybersecurityCard"
import Career from "./Career"
function App() {

 

  return (
    <div className="container-fluid p-0">
    <BrowserRouter>
    <Navbar/>
    <Header></Header>
    <Routes>
      <Route path='/' element ={<All/>} />
      <Route path='/fullstack' element ={<FullstackCard/>} />
      <Route path="/datascience" element={<Datascience/>}/>
      <Route path="/cybersecurity" element={<Cybersecurity/>}/>
      <Route path ="/career" element={<Career/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
