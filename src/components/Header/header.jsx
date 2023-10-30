import "./header.css"
import {
  Link,
} from 'react-router-dom'  

export function Header() {
  return (
  
      <div className="header">
        <div className="nav-bar-logo-link-container">
          <Link to="/" ><img className="logo" src="/logo.jpg" alt="logo" /></Link>
          <ul className="link-container">
            <li><Link to="/about" className="pages">about</Link></li>
            <li><Link to="/portfolio" className="pages">portfolio</Link></li>
            <li><Link to="/certificates" className="pages">certificates</Link></li>
            <li><Link to="/contact" className="pages">contact</Link></li>
          </ul>
              
          <ul className="social-media">
            <li><a href="https://twitter.com" title="Follow me on Twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/feyza-orasan-19794a273" title="Connect with me on Linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://www.facebook.com" title="Like me on Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com" title="Follow me on Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
  )
}