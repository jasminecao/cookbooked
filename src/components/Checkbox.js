import React, { useState } from 'react';

/**
 * 
 * @param noMargin if true, no margin bottom
 * @param step if true, margin bottom is 5
 */
export const Checkbox = ({ noMargin, step, children }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className={`flex ${
        noMargin ? '' : step ? 'mt-5' : 'mb-5'
      } items-start w-full`}
      onClick={() => setChecked(!checked)}
      style={{ cursor: 'pointer' }}
    >
      {checked ? (
        <img
          className="w-3.5"
          style={{ marginTop: '0.3rem' }}
          src="/checkbox-checked.svg"
          alt="Checkbox icon"
        />
      ) : (
        <img
          className="w-3.5"
          style={{ marginTop: '0.3rem' }}
          src="/checkbox-unchecked.svg"
          alt="Checkbox icon"
        />
      )}
      <div className={`${checked ? 'text-gray' : ''} ml-2 w-full`}>
        {children}
      </div>
    </div>
  )
}