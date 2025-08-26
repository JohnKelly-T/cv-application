function Input({label, type, value, onChange}) {  
  return (
    <label className="input-label">
      {label}
      <input type={type} value={value ? value : ''} onChange={onChange}/>

    </label>
    
  )
}

export default Input;