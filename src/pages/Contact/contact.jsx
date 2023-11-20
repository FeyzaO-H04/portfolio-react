import "./contact.css"

export function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact.</h1>
      <p>Feel free to contact me by email and I will get back to you as soon as possible</p>
      <form action="https://formsubmit.co/feyzaoh04.kodehode@gmail.com" method="POST">

      <div className="message-container">

        <div className="userName contact--input">
          <label htmlFor="username">Name</label>
          <input type="text" id="username" name="username" />
        </div> 
        <div className="userEmail contact--input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  />
        </div>
        <div className="userMessage contact--input">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="11" cols="100"></textarea>
          
        </div>
        <div className="contactButton">
          <button type="submit">Send email</button>
        </div>

      </div>

      </form>
    </div>
  )
}