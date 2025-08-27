function TextArea({ value, label, onChange }) {
  return (
    <div className="textarea-input">
      {label}
      <textarea rows="3" value={value} onChange={onChange}></textarea>
    </div>
  );
}

export default TextArea;
