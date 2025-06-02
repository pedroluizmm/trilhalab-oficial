"use client"

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-lg w-11/12 max-w-md p-6">
        {children}
        <div className="mt-4 text-right">
          <button onClick={onClose} className="text-sm text-primary-500 hover:text-primary-700">
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
