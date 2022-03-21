import React from 'react';
import BlueBan from './BlueBan';
import RedBan from './RedBan';

function BanComponent() {
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
        <BlueBan />
        <p>Bans</p>
        <RedBan />
      </div>
    </div>
  );
}

export default BanComponent;
