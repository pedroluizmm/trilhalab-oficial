"use client"

export default function TextInput({
  id,
  type = "text",
  placeholder,
  className = "",
  disabled = false,
  value,
  onChange,
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`w-full border-2 border-gray-300 focus:border-primary rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 ${className}`}
    />
  )
}
