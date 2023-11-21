import "./mainContent.css"


export function MainContent() {
  return (
    <div>
      <div className="mainContent">
        <img className="image" src="/image.svg" alt="Woman" />
        <div className="text-content">
          <h2>Frontend Developer</h2>
          <p>Hello, I'm Feyza Orasan. I have extensive experience with HTML, CSS, JavaScript, React, Figma, SQL and Node.js. I create beautiful websites that are both enjoyable and entertaining. You can check out my work in my portfolio, so please take a look around and let me know what you think! Thanks for visiting!</p>
        </div>
      </div>
    
      <div className="main">
        <div className="border-and-title">
          <div className="border"></div>
          <h2>SOME OF MY LATEST WORK</h2>
          <div className="border"></div>
        </div>
        <div className="project-container">
          <a href="https://euphonious-sherbet-eed04d.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" src="/city.image.png" alt="First project" />
            <h3>Current Weather</h3>
            <p>Js work (API)</p>
          </a>
          <a href="https://astonishing-liger-68621f.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" src="/planets.image.png" alt="Second project" />
            <h3>Weight on Other Planets Calculator</h3>
            <p>Js work</p>
          </a>
        </div>
      </div>
    </div>
  )
}