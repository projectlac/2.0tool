import React, { useCallback, useEffect, useState } from 'react';
import { Ban, Item, Pick } from 'src/models/item';
import BanComponent from '../Childs/BanComponent';
import BluePicComponent from '../Childs/BluePicComponent';
import MainBox from '../Childs/MainBox';
import RedPicComponent from '../Childs/RedPicComponent';
import ChangeTurn from '../Effects/ChangeTurn';

enum CONSTANT {
  BAN = 4,
  PICK = 14
}
export default function Home() {
  const [mode, setMode] = useState<string>('BAN');
  const [turn, setTurn] = useState<number>(0);

  const [banList, setBanlist] = useState<Ban>({
    banBlue1: -1,
    banBlue2: -1,
    banRed1: -1,
    banRed2: -1
  });
  const [pickBlue, setPickBlue] = useState<Pick>({
    pickSlot1: -1,
    pickSlot2: -1,
    pickSlot3: -1,
    pickSlot4: -1,
    pickSlot5: -1
  });
  const [pickRed, setPickRed] = useState<Pick>({
    pickSlot1: -1,
    pickSlot2: -1,
    pickSlot3: -1,
    pickSlot4: -1,
    pickSlot5: -1
  });
  const actionBan = (id: number) => {
    switch (turn) {
      case 0:
        setBanlist({ ...banList, banBlue1: id });
        break;
      case 1:
        setBanlist({ ...banList, banRed1: id });
        break;
      case 2:
        setBanlist({ ...banList, banBlue2: id });
        break;
      case 3:
        setBanlist({ ...banList, banRed2: id });
        break;
    }
    setTurn((prev) => prev + 1);
  };

  const actionPick = (id: number) => {
    if (turn % 2 === 0) {
      let temp = (turn - 4) / 2 + 1;
      console.log(temp, 'blue');

      setPickBlue({ ...pickBlue, [`pickSlot${temp}`]: id });
    } else {
      let temp = (turn - 4) / 2 + 0.5;
      console.log(temp, 'red');
      setPickRed({ ...pickRed, [`pickSlot${temp}`]: id });
    }
    setTurn((prev) => prev + 1);
  };
  const switchMode = useCallback(() => {
    if (turn < CONSTANT.BAN) {
      setMode('BAN');
    } else if (turn < CONSTANT.PICK) {
      setMode('PICK');
    } else {
      setMode('ONMY');
    }
  }, [turn]);
  useEffect(() => {
    switchMode();
  }, [turn, switchMode]);

  return (
    <div className="Main">
      <ChangeTurn turn={turn} />
      <div className="container">
        <div className="BanArea">
          <BanComponent banList={banList} />
        </div>
        <div className="BlueArea">
          <BluePicComponent pickBlue={pickBlue} />
        </div>
        <div className="RedArea">
          <RedPicComponent pickRed={pickRed} />
        </div>
        <div className="MainArea">
          <MainBox
            actionBan={actionBan}
            actionPick={actionPick}
            mode={mode}
            banList={banList}
          />
        </div>
      </div>
    </div>
  );
}
