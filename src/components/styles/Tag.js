export const Tag = ({ background, children }) => {
  return (
    <span
      className={`inline-block ${background} rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2`}
    >
      {children}
    </span>
  )
}