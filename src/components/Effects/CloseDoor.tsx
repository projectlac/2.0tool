import React, { useEffect, useState } from 'react';
import { Pick } from 'src/models/item';
import { SSR } from '../../content/data';
interface TurnProps {
  turn: number;
  pickBlue: Pick;
  pickRed: Pick;
}
function CloseDoor({ turn, pickBlue, pickRed }: TurnProps) {
  const [ani, setAni] = useState<boolean>(false);
  const convertData = (id: number) => {
    if (id !== -1) return SSR.filter((d) => d.id === id)[0].img;
    else {
      return undefined;
    }
  };
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
              <div className="blueTeam">
                <div className="left-cloud"></div>
                <div className="left-cloudRed"></div>
                <div className="blueOnmyTeam">
                  <img src="/images/mainOnmy.png" alt="" />
                </div>
                <div className="blueShikiTeam">
                  <div className="item-blueShiki">
                    <img
                      src={`/images/${convertData(pickBlue.pickSlot1)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-blueShiki">
                    <img
                      src={`/images/${convertData(pickBlue.pickSlot2)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-blueShiki">
                    <img
                      src={`/images/${convertData(pickBlue.pickSlot3)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-blueShiki">
                    <img
                      src={`/images/${convertData(pickBlue.pickSlot4)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-blueShiki">
                    <img
                      src={`/images/${convertData(pickBlue.pickSlot5)}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <img src="/images/title.png" alt="" className="img-title" />

              <div className="redTeam">
                <div className="right-cloud"></div>
                <div className="right-cloudRed"></div>
                <div className="redOnmyTeam">
                  <img src="/images/mainOnmy.png" alt="" />
                </div>
                <div className="redShikiTeam">
                  <div className="item-redShiki">
                    <img
                      src={`/images/${convertData(pickRed.pickSlot1)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-redShiki">
                    <img
                      src={`/images/${convertData(pickRed.pickSlot2)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-redShiki">
                    <img
                      src={`/images/${convertData(pickRed.pickSlot3)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-redShiki">
                    <img
                      src={`/images/${convertData(pickRed.pickSlot4)}`}
                      alt=""
                    />
                  </div>
                  <div className="item-redShiki">
                    <img
                      src={`/images/${convertData(pickRed.pickSlot5)}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="moon">
                <img src="/images/harf_mood.png" alt="" />
                <img src="/images/harf_mood.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CloseDoor;
