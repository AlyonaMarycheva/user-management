import './Input.css';

export const Input = ({ placeholder, type, value, changed, required, pattern}) => {
  return (
      <input 
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={changed} 
        pattern={pattern}
        required={required}
        className="input"/>
  )
}