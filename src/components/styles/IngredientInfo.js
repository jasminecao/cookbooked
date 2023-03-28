import { useState } from 'react';

export const IngredientInfo = ({ amount, children }) => {
  const [showAmount, setShowAmount] = useState(false);

  return (
    <span
      className="underline decoration-dashed"
      onMouseOver={() => setShowAmount(true)}
      onMouseOut={() => setShowAmount(false)}
      style={{ position: 'relative' }}
    >
      <>
        {showAmount && (
          <span
            className="triangle"
            style={{
              position: 'absolute',
              top: '-25px',
              left: '0',
              width: 'fit-content',
              display: 'flex',
              whiteSpace: 'nowrap',
              border: '1.5px solid #6B8C85',
              borderRadius: '5px',
              padding: '0 5px',
              zIndex: '2',
            }}
          >
            {amount}
          </span>
        )}
        {children}
      </>
    </span>
  )
}