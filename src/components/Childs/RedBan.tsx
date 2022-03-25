import React from 'react';
import { SSR } from '../../content/data';
interface OBJ {
  banRed1: number;
  banRed2: number;
}

function RedBan({ banRed1, banRed2 }: OBJ) {
  const convertData = (id: number) => {
    if (id !== -1) return SSR.filter((d) => d.id === id)[0].img;
    else {
      return undefined;
    }
  };
  return (
    <div className="RedBan">
      <div className="RedBan-item">
        {convertData(banRed2) !== undefined ? (
          <img src={`/images/${convertData(banRed2)}`} alt="" />
        ) : (
          ''
        )}
      </div>
      <div className="RedBan-item">
        {convertData(banRed1) !== undefined ? (
          <img src={`/images/${convertData(banRed1)}`} alt="" />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default RedBan;
