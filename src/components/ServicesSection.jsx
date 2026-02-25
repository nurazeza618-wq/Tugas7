import React from "react";
import "./services.css";

import seoImg from "../assets/seo.png";
import ppcImg from "../assets/ppc.png";
import socialImg from "../assets/social.png";
import emailImg from "../assets/email.png";
import contentImg from "../assets/content.png";
import analyticsImg from "../assets/analytics.png";

const services = [
  {
    title: "Search engine optimization",
    bg: "light",
    image: seoImg,
  },
  {
    title: "Pay-per-click advertising",
    bg: "green",
    image: ppcImg,
  },
  {
    title: "Social Media Marketing",
    bg: "dark",
    image: socialImg,
  },
  {
    title: "Email Marketing",
    bg: "light",
    image: emailImg,
  },
  {
    title: "Content Creation",
    bg: "green",
    image: contentImg,
  },
  {
    title: "Analytics and Tracking",
    bg: "dark",
    image: analyticsImg,
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services-grid">
        {services.map((item, index) => (
          <div key={index} className={`card ${item.bg}`}>
            
            <div className="card-top">
              <div className="title-wrapper">
                <span className="highlight">{item.title}</span>
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="card-img"
              />
            </div>

            <div className="learn-more">
              <div className="circle-arrow">→</div>
              <p>Learn more</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}