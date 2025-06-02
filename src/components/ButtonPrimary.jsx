"use client"

export default function ButtonPrimary({ children, onClick, className = "", disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-black hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  )
}
