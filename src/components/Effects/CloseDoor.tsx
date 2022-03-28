import React, { useCallback, useEffect, useState } from 'react';
interface TurnProps {
  turn: number;
}
function CloseDoor({ turn }: TurnProps) {
  const [ani, setAni] = useState<boolean>(false);

  useEffect(() => {
    if (turn >= 16)
      setTimeout(() => {
        setAni(true);
      }, 300);
  }, [turn]);
  return (
    <>
      {turn >= 16 && (
        <div className={`CloseDoor`}>
          <img
            src="/images/path1.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path2.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path3.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path4.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <div className={`logo ${ani ? 'ani' : ''}`}>
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default CloseDoor;
