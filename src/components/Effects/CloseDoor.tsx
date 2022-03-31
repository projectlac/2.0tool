import React, { useCallback, useEffect, useState } from 'react';
interface TurnProps {
  turn: number;
}
function CloseDoor({ turn }: TurnProps) {
  const [ani, setAni] = useState<boolean>(false);

  useEffect(() => {
    if (turn >= 16)
      setTimeout(() => {
        setAni(true);
      }, 300);
  }, [turn]);
  return (
    <>
      {turn >= 16 && (
        <div className={`CloseDoor`}>
          <img
            src="/images/path1.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path2.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path3.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <img
            src="/images/path4.png"
            alt=""
            className={`${ani ? 'ani' : ''}`}
          />
          <div className={`logo ${ani ? 'ani' : ''}`}>
            <div className="mid-image">
              <div className="left-cloudRed"></div>
              <div className="left-cloud"></div>
              <div className="blueTeam">
                <div className="blueOnmyTeam">
                  <img src="/images/mainOnmy.png" alt="" />
                </div>
                <div className="blueShikiTeam">
                  <div className="item-blueShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-blueShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-blueShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-blueShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-blueShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <img src="/images/title.png" alt="" className="img-title" />
              <div className="moon">
                <img src="/images/harf_mood.png" alt="" />
                <img src="/images/harf_mood.png" alt="" />
              </div>
              <div className="redTeam">
                <div className="redOnmyTeam">
                  <img src="/images/mainOnmy.png" alt="" />
                </div>
                <div className="redShikiTeam">
                  <div className="item-redShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-redShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-redShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-redShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                  <div className="item-redShiki">
                    <img src="/images/xugitopr9x8wtzqvbvz6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="right-cloud"></div>
              <div className="right-cloudRed"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CloseDoor;
