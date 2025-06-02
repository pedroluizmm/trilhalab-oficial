export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 ${className}`}
    >
      {children}
    </div>
  )
}
