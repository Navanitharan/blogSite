import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar/>
    <header style={{boxShadow:"0 0 5px 0 rgba(0,0,0,.3)",marginTop:"10px"}}>
      <div className="header-container">
        <div className="header-image d-flex justify-content-center">
          <a className='col-lg-9 col-sm-12' href="#" target="" rel="noopener noreferrer">
            <img style={{height:"200px",width:"100%"}} src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header.png" alt="Header image" />
          </a>
        </div>
      </div>
    </header>
    </div>
  );
}

export default App;
