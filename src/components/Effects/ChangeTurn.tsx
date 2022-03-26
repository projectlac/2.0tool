import React, { useCallback, useEffect, useState } from 'react';
interface TurnProps {
  turn: number;
}
function ChangeTurn({ turn }: TurnProps) {
  const [somethingChange, setSomethingChange] = useState<boolean>(false);
  const handleTurn = () => {
    if (turn % 2 === 0) {
      return 'Lượt xanh';
    } else {
      return 'Lượt đỏ';
    }
  };
  const handleColor = () => {
    if (turn % 2 === 0) {
      return 'Blue';
    } else {
      return 'Red';
    }
  };
  //   const resetFunction = useCallback(() => {
  //     if (somethingChange) {
  //       setTimeout(() => {
  //         setSomethingChange(false);
  //       }, 2000);
  //     }
  //   }, [somethingChange]);
  useEffect(() => {
    setSomethingChange(true);
    // resetFunction();
    setTimeout(() => {
      setSomethingChange(false);
    }, 1000);
  }, [turn]);

  return (
    <div
      className={`ChangeTurn ${
        somethingChange ? 'active' : ''
      } ${handleColor()}`}
    >
      {handleTurn()}
    </div>
  );
}

export default ChangeTurn;
