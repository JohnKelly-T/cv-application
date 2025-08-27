import { ArrowDownIconLineLight, DeleteIconLight } from "../icons";

function ItemAccordion({ label, children, isActive, onShow }) {
  let accordionState = isActive ? "expanded" : "collapsed";

  function handleOnClick() {
    if (isActive) {
      onShow(null);
    } else {
      onShow();
    }
  }

  return (
    <div className={"item-accordion " + accordionState}>
      <div className="label-button" onClick={handleOnClick}>
        <div className="label">{label}</div>
        <div className="item-arrow">
          <ArrowDownIconLineLight />
        </div>
        <div
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            console.log("delete button clicked");
          }}
        >
          <DeleteIconLight />
        </div>
      </div>

      <div className="item-content">{children}</div>
    </div>
  );
}

export default ItemAccordion;
