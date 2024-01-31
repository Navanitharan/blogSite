import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect } from 'react';

function Navbar() {

    // useEffect hook is used here
  useEffect(() => {
    // Code inside this block runs after the component has been rendered

    // Enable hover on navbar items with dropdown
    const dropdownItems = document.querySelectorAll('.navbar-nav .nav-item .dropdown');
    dropdownItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        item.querySelector('.dropdown-toggle').click();
      });

      item.addEventListener('mouseout', () => {
        item.querySelector('.dropdown-toggle').click();
      });
    });

    // The return statement here can be used to clean up the effect if needed
    return () => {
      // Cleanup code (optional)
    };
  }, []); // The empty array [] as the second argument means this effect runs once after the initial render


  return (
    <>
      <div className="container col-9">
  <nav className="navbar navbar-expand-lg d-flex">
      <div className="logo nav-brand">
        <a href="https://guvi.in/blog/">
          <img width="121" height="53" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="Guvi-blog-logo"/> 
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mx-auto"></div>
        <ul className='navbar-nav d-flex justify-content-between'>
              <li className="nav-item"><a className="nav-link" href="#" role="button" aria-expanded="false">
                  COURCES
                </a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LIVECLASSES
                </a>
                <ul className="dropdown-menu">

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>Zen Class</p>
                          <div style={{border:"1px solid red",color:"red"}} className="info mx-2 d-flex justify-content-center text-align-center">
                            <div className="redicon"></div>
                            <p>live online classes</p>
                          </div>
                        </div>
                          <div className="desc">
                            <p>LIVE Online Intensive Program + 100% Placement Support</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>Full Stack Development Program (FSD)</p>
                        </div>
                          <div className="desc">
                            <p>Learn Javascript, HTML, CSS, Java, Data Structure, MangoDB & more</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>IIT-M Advanced Programming & Data Science Program</p>
                        </div>
                          <div className="desc">
                            <p>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>Automation & Testing Program</p>
                        </div>
                          <div className="desc">
                            <p>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li>

                  <a className="dropdown-item" href="#">
                      <div>
                      <p style={{color:"green"}}>Explore More Programs</p>
                      </div>
                    </a>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRACTICE
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title">
                          <p style={{fontSize:"18px"}}>CodeKata</p>
                        </div>
                          <div className="desc">
                            <p>Sharepen your coding skills, prepare for interviews</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>Webkata</p>
                        </div>
                          <div className="desc">
                            <p>Build basic Frontend and Backend Development skills</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>IDE - Online Compiler</p>
                        </div>
                          <div className="desc">
                            <p>Run & test your code in any programming language</p>
                          </div>
                      </div>
                    </a>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  RESOURCE
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">REWARDS</a></li>
                  <li><a className="dropdown-item" href="#">REFERRALS</a></li>
                  <li><a className="dropdown-item" href="#">FORUM SUPPORT</a></li>
                  <li><a className="dropdown-item" href="#">BLogs</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR PRODUCTS
                </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title">
                          <p style={{fontSize:"18px"}}>HackerKid</p>
                        </div>
                          <div className="desc">
                            <p>Coding classess platform for K-12 Children</p>
                          </div>
                      </div>
                    </a>
                  </li>

                  <li><a className="dropdown-item" href="#">
                      <div>
                        <div style={{height:"30px"}} className="title d-flex">
                          <p style={{fontSize:"18px"}}>GUVI for Corporates</p>
                        </div>
                          <div className="desc">
                            <p>Meet your hirring needs at ease</p>
                          </div>
                      </div>
                    </a>
                  </li>
                  </ul>
              </li>
            </ul>
        </div>
  </nav>
</div>


    </>
  );
}

export default Navbar;
