import { DeleteIconLight } from "../icons";

function ItemInputLink({ linkText, url, onLinkChange, onURLChange, onDelete }) {
  return (
    <div className="item-input-link">
      <div className="input-link-container">
        <input
          type="text"
          placeholder="Link Text"
          value={linkText}
          onChange={onLinkChange}
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={onURLChange}
        />
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
  );
}

export default ItemInputLink;
