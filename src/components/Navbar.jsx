//import logo from '../assets/logo.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../components/Navbar.css'
import logo from '../assets/logo.png'


export default function Navbar () {
  
    return(
 
            <nav className='navigation'>               
                <div className='header'>
                  <div className='header-info'>
                      <img src={logo} alt="logo" className='logo'/>
                </div>
                </div>
              <ul>
            <li><AnchorLink href="#about" className="text-large red anchor" >About</AnchorLink></li>
            <li><AnchorLink href="#work" className="text-large red anchor" >Work Experience</AnchorLink></li>
            <li><AnchorLink href="#skills" className="text-large red anchor">Skills, Education and Interests</AnchorLink></li>
            <li><AnchorLink href="#contact" className="text-large red anchor">Contact</AnchorLink></li>
              </ul>
            
            </nav>            
      
    );
}