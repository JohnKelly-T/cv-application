import { DeleteIconLight } from "../icons";

function ItemInput({ value, onChange, onDelete }) {
  return (
    <div className="item-input">
      <input type="text" value={value} onChange={onChange} />
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
  );
}

export default ItemInput;
