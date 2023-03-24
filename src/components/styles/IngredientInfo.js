import { useState } from 'react';

export const IngredientInfo = ({ amount, children }) => {
  const [showAmount, setShowAmount] = useState(false);

  return (
    <span className="underline decoration-dashed" onMouseOver={() => setShowAmount(true)} onMouseOut={() => setShowAmount(false)} style={{position: 'relative'}}>
      <>
      {children}
      {showAmount && <span style={{position: 'absolute', top: '-20px', left: '0', width: 'fit-content', display: 'flex', whiteSpace: 'nowrap'}}>{amount}</span>}
      </>
    </span>
  );
}