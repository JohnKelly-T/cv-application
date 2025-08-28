import { ArrowDownIconLineLight, DeleteIconLight } from "../icons";

function ItemAccordion({ label, children, isActive, onShow, onDelete }) {
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
            onDelete();
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
