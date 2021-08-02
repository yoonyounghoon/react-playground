import React from "react";
import ColorBox from "./components/ColorBox";
import {
  SmartAccordion,
  SmartAccordionBody,
  SmartAccordionHeader,
} from "./components/SmartAccordion";
import StupidAccordion from "./components/StupidAccordion";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <>
      <SmartAccordion>
        <SmartAccordionHeader>I`m SmartAccordion</SmartAccordionHeader>
        <SmartAccordionBody>Body</SmartAccordionBody>
      </SmartAccordion>
      <SmartAccordion>
        <SmartAccordionHeader>I`m SmartAccordion2</SmartAccordionHeader>
        <SmartAccordionBody>Body22</SmartAccordionBody>
      </SmartAccordion>
    </>
  );
};

export default App;
