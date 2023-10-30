import "./mainContent.css"


export function MainContent() {
  return (
    <div>
      <div className="mainContent">
        <img className="image" src="/image.svg" alt="Woman" />
        <div className="text-content">
          <h2>Frontend Developer</h2>
          <p>"Hello, I'm Feyza Orasan. I have extensive experience with HTML, CSS, and JavaScript. I create beautiful websites that are both enjoyable and entertaining. You can check out my work in my portfolio, so please take a look around and let me know what you think! Thanks for visiting!"</p>
        </div>
      </div>
    
      <div className="main">
        <div className="border-and-title">
          <div className="border"></div>
          <h2>SOME OF MEY LATEST WORK</h2>
          <div className="border"></div>
        </div>
        <div className="project-container">
          <div className="projects"></div>
          <div className="projects"></div>
          <div className="projects"></div>
        </div>
      </div>
    </div>
  )
}