import "./footer.css"
import {
  Link,
} from 'react-router-dom'  

export function Footer() {
  return (
    <div className="footer">

      <a className="upIcon" href="#header"><i className="fa-solid fa-chevron-up up-icon"></i></a>

      
      <div className="footer-content">
        <div className="footer-left">
          <i className="fa-regular fa-copyright"></i>
          <Link to="/" className="footer-name">2023 Feyza Orasan</Link>
        </div>
        <ul>
          <li><Link to="/" className="footer-pages">home</Link></li>
          <li><Link to="/about" className="footer-pages">about</Link></li>
          <li><Link to="/certificates" className="footer-pages">certificates</Link></li>
          <li><Link to="/contact" className="footer-pages">contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

    
   
