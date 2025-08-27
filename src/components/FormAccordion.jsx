import { ArrowDownIcon } from "../icons";

function FormAccordion({ label, Icon, isActive, onShow, children }) {
  let accordionState = isActive ? "expanded" : "collapsed";

  function handleOnClick() {
    if (isActive) {
      onShow(null);
    } else {
      onShow();
    }
  }

  return (
    <div className={"form-accordion " + accordionState}>
      <button className="label-button" onClick={handleOnClick}>
        <Icon />
        <div className="label">{label}</div>
        <div className="arrow">
          <ArrowDownIcon />
        </div>
      </button>

      {children}
    </div>
  );
}

export default FormAccordion;
