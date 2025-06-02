export default function Select({ id, options = [], className = "" }) {
  return (
    <select
      id={id}
      className={`w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 ${className}`}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}
