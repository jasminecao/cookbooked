import React, { useState } from 'react';

export const Checkbox = ({noMargin, children}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`flex ${!noMargin && 'mb-3'} items-start`} onClick={() => setChecked(!checked)} style={{cursor: 'pointer', width: 'fit-content'}}>
      { checked ? (
        <img className="w-3.5" style={{marginTop: '0.3rem'}} src="/checkbox-checked.svg" alt="Checkbox icon" />
      ) : (
        <img className="w-3.5" style={{marginTop: '0.3rem'}} src="/checkbox-unchecked.svg" alt="Checkbox icon" />
      )}
      <span className={`${checked && 'text-gray'} ml-2`}>{children}</span>
    </div>
  );
};