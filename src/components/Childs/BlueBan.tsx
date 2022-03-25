import React from 'react';
import { SSR } from '../../content/data';
interface OBJ {
  banBlue1: number;
  banBlue2: number;
}

function BlueBan({ banBlue1, banBlue2 }: OBJ) {
  const convertData = (id: number) => {
    if (id !== -1) return SSR.filter((d) => d.id === id)[0].img;
    else {
      return undefined;
    }
  };

  return (
    <div className="BlueBan">
      <div className="BlueBan-item">
        {convertData(banBlue1) !== undefined ? (
          <img src={`/images/${convertData(banBlue1)}`} alt="" />
        ) : (
          ''
        )}
      </div>
      <div className="BlueBan-item">
        {convertData(banBlue2) !== undefined ? (
          <img src={`/images/${convertData(banBlue2)}`} alt="" />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default BlueBan;
