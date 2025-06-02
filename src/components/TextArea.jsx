export default function TextArea({ id, placeholder, rows = 4, className = "" }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      rows={rows}
      className={`w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 ${className}`}
    />
  )
}
