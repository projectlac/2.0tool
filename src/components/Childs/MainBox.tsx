import React, { useState } from 'react';
import { SSR } from '../../content/data';
function MainBox() {
  const [search, setSearch] = useState<string>('');
  const convertData = () => {
    return SSR.filter((post: any) => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChangeInput} />
      <div className="MainPicker">
        {convertData().map((shiki) => (
          <div className="col-md-1-custom">
            <img src={`/images/${shiki.img}`} alt={shiki.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBox;
