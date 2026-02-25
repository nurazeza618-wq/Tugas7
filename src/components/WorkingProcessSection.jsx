import React, { useState } from "react";
import "./workingProcess.css";

export default function WorkingProcessSection() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts."
    },
    { title: "Research and Strategy Development" },
    { title: "Implementation" },
    { title: "Monitoring and Optimization" },
    { title: "Reporting and Communication" }
  ];

  return (
    <section className="process-section">

      <div className="section-header">
        <span className="section-highlight">Our Working Process</span>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className="accordion">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`accordion-item ${active === index ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="left">
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step.title}</span>
              </div>

              <div className="icon">
                {active === index ? "−" : "+"}
              </div>
            </div>

            {active === index && (
              <div className="accordion-content">
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}