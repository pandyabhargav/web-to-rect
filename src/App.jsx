import About from "./component/About/About ";
import Fact from "./component/Fact/Fact";
import Header from "./component/Headr/Header";
import Hero from "./component/Hero/Hero";
import Resume from "./component/Resume/Resume";
import Terminater from "./component/Terminater/Terminater";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>

 <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button> 
  <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>


<Header/>
<Hero/>

 

  <main id="main">

 <About/>
  <Fact/>
<Resume/>
<Terminater />

   

  </main>


  <footer id="footer">
    <div className="container">
      <h3>Brandon Johnson</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
       

        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}

export default App;
