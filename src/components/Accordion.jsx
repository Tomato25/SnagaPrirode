import { React, useState } from "react";
import "./Accordion.css";

function Accordion(props) {
  const [accordionToggle, setAccordionToggle] = useState(false);

  const toggler = () => {
    setAccordionToggle(!accordionToggle);
    console.log(accordionToggle);
  };

  return (
    <div className="benefitsAccordion">
      <div className="benefitsAccordionTitle">
        <h4 onClick={toggler}>Dobrobiti</h4>
        <svg
          onClick={toggler}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {accordionToggle && (
        <div className="benefitsAccordionContent">
          {props.benefits.map((benefits, index) => {
            return (
              <ul key={index}>
                <li>{benefits.benefit}</li>
              </ul>
            );
          })}
        </div>
      ) }
    </div>
  );
}

export default Accordion;
