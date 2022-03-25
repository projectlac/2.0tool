import React from 'react';
import { Ban, Item } from 'src/models/item';
import BlueBan from './BlueBan';
import RedBan from './RedBan';

interface PropsBan {
  banList: Ban;
}
function BanComponent({ banList }: PropsBan) {
  const { banBlue1, banBlue2, banRed1, banRed2 } = banList;

  return (
    <div className="BanContainer">
      <div className="divBlueBan">
        <img src="/images/Layer 3.png" alt="" />
        <p> Đội Xanh</p>
      </div>
      <div>Bất kiến chi chủ</div>
      <div className="divRedBan">
        <p>Đội đỏ</p> <img src="/images/Repeat Grid 1.png" alt="" />
      </div>
      <div className="BanBox">
        <BlueBan banBlue1={banBlue1} banBlue2={banBlue2} />
        <p>Bans</p>
        <RedBan banRed1={banRed1} banRed2={banRed2} />
      </div>
    </div>
  );
}

export default BanComponent;
