import "./footer.css"


export function Footer() {
  return (
    <div className="footer">

      <a className="upIcon" href="#header"><i className="fa-solid fa-chevron-up up-icon"></i></a>

      
      <div className="footer-content">
        <div className="footer-left">
          <i className="fa-regular fa-copyright"></i>
          <p>2023 Feyza Orasan</p>
        </div>
        <ul>
          <li><a href="">about</a></li>
          <li><a href="">portfolio</a></li>
          <li><a href="">certificates</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </div>
    </div>
  )
}

    
   
