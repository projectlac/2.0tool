import React, { useState } from 'react';
import { Ban, ChooseOnmy, Item } from 'src/models/item';
import { SSR } from '../../content/data';
import { ReactComponent as Search } from '../../assets/search.svg';
interface propsFromHome {
  actionBan: (id: number) => void;
  actionPick: (id: number) => void;
  turnAddOne: () => void;
  mode: string;
  turn: number;

  banList: Ban;
}
function MainBox({
  actionBan,
  actionPick,
  mode,
  turn,
  banList,
  turnAddOne
}: propsFromHome) {
  const [search, setSearch] = useState<string>('');
  const [itemHasPending, setItemHasPending] = useState<number>(-1);
  const convertData = (): Item[] => {
    return SSR.filter((post: Item) => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const [chooseOnmy, setChooseOnmy] = useState<ChooseOnmy>({
    blue: -1,
    red: -1
  });
  const actionOnmy = (id: number) => {
    if (turn % 2 === 0) {
      setChooseOnmy({ ...chooseOnmy, blue: id });
    } else {
      setChooseOnmy({ ...chooseOnmy, red: id });
    }
    turnAddOne();
  };
  const onmyoji = [
    {
      id: 1,
      name: 'Seimei',
      image: 'Seimei.png'
    },
    {
      id: 2,
      name: 'Seimei',
      image: 'Seimei.png'
    },
    {
      id: 3,
      name: 'Seimei',
      image: 'Seimei.png'
    },
    {
      id: 4,
      name: 'Seimei',
      image: 'Seimei.png'
    }
  ];

  const findImageById = (id: number) => {
    return onmyoji.filter((d) => d.id === id)[0].image;
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const pending = (id: number) => {
    // const indexOfThisItem = findIndexWithId(id);
    setItemHasPending(id);
  };

  const findIndexWithId = (id: number) => {
    return Boolean(Object.keys(banList).find((key) => banList[key] === id));
    // return SSR.indexOf(SSR.filter((d) => d.id === id)[0]);
  };
  const handleAction = () => {
    if (itemHasPending !== -1) {
      if (mode === 'BAN') {
        actionBan(itemHasPending);
      }
      if (mode === 'PICK') {
        actionPick(itemHasPending);
      }

      if (mode === 'ONMY') {
        actionOnmy(itemHasPending);
      }
      setItemHasPending(-1);
    }
  };
  return (
    <>
      <div className="MainPicker">
        <div className="MainPicker-box">
          <div className="MainPicker-action">
            <input type="text" onChange={handleChangeInput} />
            {turn < 16 && (
              <button onClick={handleAction}>
                {mode === 'BAN' ? <Search /> : ' PICK'}
              </button>
            )}
          </div>
          <div className="MainPicker-box-item">
            {mode !== 'ONMY'
              ? convertData().map((shiki, index) => (
                  <div
                    className={`col-md-1-custom ${
                      itemHasPending === shiki.id ? 'choose' : ''
                    } ${findIndexWithId(shiki.id) ? 'ban' : ''}`}
                    key={index}
                    onClick={() => {
                      pending(shiki.id);
                    }}
                  >
                    <img src={`/images/${shiki.img}`} alt={shiki.name} />
                  </div>
                ))
              : onmyoji.map((d, index) => (
                  <div
                    className={`col-onmy ${
                      itemHasPending === d.id ? 'choose' : ''
                    }`}
                    key={index}
                    onClick={() => {
                      pending(d.id);
                    }}
                  >
                    <img src={`/images/${d.image}`} alt="" />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="Onmyoji-box">
        {chooseOnmy.blue !== -1 && (
          <img src={`/images/${findImageById(chooseOnmy.blue)}`} alt="" />
        )}
        {chooseOnmy.red !== -1 && (
          <img src={`/images/${findImageById(chooseOnmy.red)}`} alt="" />
        )}
      </div>
    </>
  );
}

export default MainBox;
