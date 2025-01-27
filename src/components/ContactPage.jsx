import { useState } from "react";

export default function ContactPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return <section>
    <h1 className="text-white text-center text-3xl mb-10"><i className="fas fa-envelope"></i> Contact Us</h1>
  <div className="max-w mx-auto shadow-lg">
    <form className="flex flex-col gap-6 items-center">
      <div className="relative mb-6">
        <label >Name</label>
        <div className="input-wrapper">
          <i className="fas fa-user icon"></i>
          <input type="text" required={true} placeholder="Enter your name..." onChange={(e) => {
            setName(e.target.value);
          }} />
          <div className="fancy-bg"></div>
        </div>
      </div>
      <div className="form-group">
        <label >Email</label>
        <div className="input-wrapper">
          <i className="fas fa-envelope icon"></i>
          <input className="input" type="email" required={true} placeholder="Enter your email..." onChange={(e) =>{
            setEmail(e.target.value)
          }}/>
          <div className="fancy-bg"></div>
        </div>
      </div>
      <div className="form-group">
        <label >Message</label>
        <div className="input-wrapper">
          <i className="fas fa-comment icon"></i>
          <textarea className="input" required={true} placeholder="Enter your message..." onChange={(e) => {
            setMessage(e.target.value)
          }}></textarea>
          <div className="fancy-bg"></div>
        </div>
        </div>
      <div className="button-area">
        <button type="submit"><i className="fas fa-paper-plane"></i> Send Message</button>
      </div>
    </form>
  </div>
</section>
}

