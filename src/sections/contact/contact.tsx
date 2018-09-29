import * as React from "react";

import "./contact.css";
import SocialIcon, { ISocialIcon } from "../../components/social/social";

const socialIconList: ISocialIcon[] = [
  {
    id: "ln",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harvey-delaney-578150108/",
    icon: "fa-linkedin"
  },
  {
    id: "gh",
    name: "GitHub",
    url: "https://github.com/harveyd/",
    icon: "fa-github"
  },
  {
    id: "so",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/7952076/harveyd",
    icon: "fa-stack-overflow"
  },
  {
    id: "bl",
    name: "Harvey's Blog",
    url: "https://blog.harveydelaney.com/",
    icon: "fa-bars"
  }
];

const Contact: React.StatelessComponent = () => {
  return (
    <div className="section section-theme">
      <h2>Contact</h2>

      <div className="contact-container">
        <div className="social-container">
          {socialIconList.map((social, i) => (
            <SocialIcon key={i} social={social} />
          ))}
        </div>

        <div className="form-container">
          <h2>Send me a message</h2>
          <form method="POST" className="form" action="https://formspree.io/harvey@harveydelaney.com">
            <input type="hidden" name="_subject" value="Contact request from personal website"/>
            <input type="email" name="_replyto" placeholder="Your email" /> 
            <textarea name="message" placeholder="Your message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
