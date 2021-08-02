import React, { useState } from "react";

const StupidAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <header className="header" onClick={() => setIsOpen(!isOpen)}>
        I'm stupid Accordion
      </header>
      <div className={isOpen ? "active" : "body"}>Body</div>
    </div>
  );
};

export default StupidAccordion;
