import React from 'react';
import { Pick } from 'src/models/item';
import { SSR } from '../../content/data';
interface PropsPick {
  pickBlue: Pick;
}

function BluePicComponent({ pickBlue }: PropsPick) {
  const convertData = (id: number) => {
    if (id !== -1) return SSR.filter((d) => d.id === id)[0].img;
    else {
      return undefined;
    }
  };

  return (
    <div className="BluePicComponent">
      <div className="BlueOption">
        <div className={`BlueOption-item`}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickBlue.pickSlot1) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`BlueOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickBlue.pickSlot2) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`BlueOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickBlue.pickSlot3) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`BlueOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickBlue.pickSlot4) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        <div className={`BlueOption-item `}>
          <img
            src="/images/357.png"
            alt=""
            className={`${
              convertData(pickBlue.pickSlot5) !== undefined ? 'ani' : ''
            }`}
          />
        </div>
        {/* <div className="BlueOption-onmy">
          <img src="/images/Seimei.png" alt="" />
        </div> */}
      </div>
      <div className="BlueEmpty"></div>
    </div>
  );
}

export default BluePicComponent;
