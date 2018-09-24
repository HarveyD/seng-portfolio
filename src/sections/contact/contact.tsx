import * as React from "react";

import "./contact.css";
import SocialIcon, { ISocialIcon } from "../../components/social/social";

const socialIconList: ISocialIcon[] = [
  {
    id: 'ln',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harvey-delaney-578150108/',
    icon: 'fa-linkedin'
  },
  {
    id: 'gh',
    name: 'GitHub',
    url: 'https://github.com/harveyd/',
    icon: 'fa-github'
  },
  {
    id: 'so',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/7952076/harveyd',
    icon: 'fa-stack-overflow'
  },
  {
    id: 'bl',
    name: 'Harvey\'s Blog',
    url: 'https://blog.harveydelaney.com/',
    icon: 'fa-bars'
  }
];

const Contact: React.StatelessComponent = () => {
  return (
    <div className="section theme">
      <h2>Contact</h2>

      <div className="contact-container">
        {socialIconList.map((social, i) => (
          <SocialIcon key={i} social={social} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
