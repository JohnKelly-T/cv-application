function Input({label, type, value, placeholder, onChange}) {  
  return (
    <label className="input-label">
      {label}
      <input type={type} value={value ? value : ''} onChange={onChange} placeholder={placeholder}/>

    </label>
    
  )
}

export default Input;