import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function FeatureCard({ title, heading, text, isNegative, image }) {
  return (
    <section className={`feature${isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature__heading${
              isNegative ? " feature__heading_negative" : ""
            }`}
          >
            {heading}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </header>
      <p className="feature__text" dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  );
}

export default FeatureCard;
