function Input({ data, dataProperty, label, type, onChange }) {
  return (
    <label className="input-label">
      {label}
      <input
        type={type}
        value={data[dataProperty]}
        onChange={(e) => onChange({ ...data, [dataProperty]: e.target.value })}
      />
    </label>
  );
}

export default Input;
