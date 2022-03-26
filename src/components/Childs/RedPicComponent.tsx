import React from 'react';
import { Pick } from 'src/models/item';
import { SSR } from '../../content/data';
interface PropsPick {
  pickRed: Pick;
}

function RedPicComponent({ pickRed }: PropsPick) {
  const convertData = (id: number) => {
    if (id !== -1) return SSR.filter((d) => d.id === id)[0].img;
    else {
      return undefined;
    }
  };

  return (
    <div className="RedPicComponent">
      <div className="RedOption">
        <div className={`RedOption-item`}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickRed.pickSlot1) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`RedOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickRed.pickSlot2) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`RedOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickRed.pickSlot3) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`RedOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickRed.pickSlot4) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`RedOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickRed.pickSlot5) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        {/* <div className="RedOption-onmy">
          <img src="/images/Seimei.png" alt="" />
        </div> */}
      </div>
      <div className="RedEmpty"></div>
    </div>
  );
}

export default RedPicComponent;
