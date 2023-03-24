/**
 * Largest heading (font size of 36pt)
 */
export const Heading = ({ children }) => (
  <h1 className="text-4xl font-medium">{children}</h1>
)

export const SubHeading = ({ children }) => (
  <h2 className="text-2xl font-medium mb-3">{children}</h2>
)

/**
 * Surrounds a number with a circle border (for recipe outline)
 * @param {number} number 
 */
export const CircleNumber = ({ number }) => (
  <div
    style={{
      border: '1.5px solid #000000',
      borderRadius: '50%',
      width: '21px',
      height: '21px',
      lineHeight: '21px',
      display: 'flex',
      marginRight: '8px',
    }}
  >
    <span className="mx-auto" style={{ fontSize: '14px', lineHeight: '21px' }}>
      {number}
    </span>
  </div>
)