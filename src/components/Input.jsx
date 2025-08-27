function Input({ value, label, type, onChange }) {
  return (
    <label className="input-label">
      {label}
      <input type={type} value={value ? value : ""} onChange={onChange} />
    </label>
  );
}

export default Input;
