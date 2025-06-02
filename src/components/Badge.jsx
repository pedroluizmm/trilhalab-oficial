export default function Badge({ icon, title, date }) {
  return (
    <div className="flex items-center gap-3">
      <div>{icon}</div>
      <div>
        <p className="text-md font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  )
}
