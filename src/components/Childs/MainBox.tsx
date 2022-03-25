import React, { useState } from 'react';
import { Item } from 'src/models/item';
import { SSR } from '../../content/data';

interface propsFromHome {
  actionBan: (id: number) => void;
  mode: string;
}
function MainBox({ actionBan, mode }: propsFromHome) {
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
    // if (turn < CONSTANT.BAN) {
    // }
  };
  const handleAction = () => {
    if (mode === 'BAN') {
      actionBan(itemHasPending);
    }
    setItemHasPending(-1);
  };
  return (
    <>
      <div className="MainPicker">
        <input type="text" onChange={handleChangeInput} />
        <div className="MainPicker-box">
          {convertData().map((shiki, index) => (
            <div
              className={`col-md-1-custom ${
                itemHasPending === shiki.id ? 'choose' : ''
              }`}
              key={index}
              onClick={() => {
                pending(shiki.id);
              }}
            >
              <img src={`/images/${shiki.img}`} alt={shiki.name} />
            </div>
          ))}
        </div>
        <button onClick={handleAction}>{mode}</button>
      </div>
      <div className="Onmyoji-box">
        <img src="/images/Seimei.png" alt="" />
        <img src="/images/Seimei.png" alt="" />
      </div>
    </>
  );
}

export default MainBox;
