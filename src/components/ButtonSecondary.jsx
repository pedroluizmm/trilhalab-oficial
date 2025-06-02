"use client"

export default function ButtonSecondary({ children, onClick, className = "", disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed text-primary border-2 border-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${className}`}
    >
      {children}
    </button>
  )
}
