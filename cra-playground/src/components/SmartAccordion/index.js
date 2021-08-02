import React, { createContext, useContext, useState } from "react";

const AccordionContext = createContext();
const useAccordionContext = () => useContext(AccordionContext);
export const SmartAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div className="accordion-wrapper">{props.children}</div>
    </AccordionContext.Provider>
  );
};

export const SmartAccordionHeader = (props) => {
  const { isOpen, setIsOpen } = useAccordionContext();
  return <header onClick={() => setIsOpen(!isOpen)}>{props.children}</header>;
};

export const SmartAccordionBody = () => {
  const { isOpen } = useAccordionContext();
  return <div className={isOpen ? "active" : "body"}>Body</div>;
};
