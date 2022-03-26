import React, { useState } from 'react';
import { Ban, Item } from 'src/models/item';
import { SSR } from '../../content/data';
import { ReactComponent as Search } from '../../assets/search.svg';
interface propsFromHome {
  actionBan: (id: number) => void;
  actionPick: (id: number) => void;
  mode: string;
  banList: Ban;
}
function MainBox({ actionBan, actionPick, mode, banList }: propsFromHome) {
  const [search, setSearch] = useState<string>('');
  const [itemHasPending, setItemHasPending] = useState<number>(-1);
  const convertData = (): Item[] => {
    return SSR.filter((post: Item) => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
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
      setItemHasPending(-1);
    }
  };
  return (
    <>
      <div className="MainPicker">
        <div className="MainPicker-box">
          <div className="MainPicker-action">
            <input type="text" onChange={handleChangeInput} />
            <button onClick={handleAction}>
              {mode === 'BAN' ? <Search /> : ' PICK'}
            </button>
          </div>
          <div className="MainPicker-box-item">
            {convertData().map((shiki, index) => (
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
            ))}
          </div>
        </div>
      </div>
      <div className="Onmyoji-box">
        <img src="/images/Seimei.png" alt="" />
        <img src="/images/Seimei.png" alt="" />
      </div>
    </>
  );
}

export default MainBox;
