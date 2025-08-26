import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";

function FormAccordion({label, Icon, children}) {
  const [accordionState, setAccordionState] = useState('collapsed');

  function handleOnClick() {
    let nextState = accordionState === 'collapsed' ? 'expanded' : 'collapsed';

    setAccordionState(nextState);
  };

  return (
    <div className={'form-accordion ' + accordionState}>
      <button className="label-button" onClick={handleOnClick}>
        <Icon />
        <div className="label">{label}</div>
        <div className="arrow">
          <ArrowDownIcon />
        </div>
      </button>
      
      {children}
    </div>
  )
}

export default FormAccordion;