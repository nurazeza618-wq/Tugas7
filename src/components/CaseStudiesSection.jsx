import React from "react";
import "./caseStudies.css";

export default function CaseStudiesSection() {
  return (
    <section className="case-section">

      <div className="section-header">
        <span className="section-highlight">Case Studies</span>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing
          Success Through Our Case Studies
        </p>
      </div>

      <div className="case-container">
        <div className="case-card">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign
            that resulted in a 50% increase in website traffic and a 25%
            increase in sales.
          </p>
          <span className="learn-link">Learn more →</span>
        </div>

        <div className="divider"></div>

        <div className="case-card">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 40%
            increase in organic traffic.
          </p>
          <span className="learn-link">Learn more →</span>
        </div>

        <div className="divider"></div>

        <div className="case-card">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <span className="learn-link">Learn more →</span>
        </div>
      </div>

    </section>
  );
}