import React from "react";
import BanComponent from "../Childs/BanComponent";
import BluePicComponent from "../Childs/BluePicComponent";
import MainBox from "../Childs/MainBox";
import RedPicComponent from "../Childs/RedPicComponent";

export default function Home() {
  return (
    <div className="Main">
      <div className="container">
        <div className="BanArea">
          <BanComponent />
        </div>
        <div className="BlueArea">
          <BluePicComponent />
        </div>
        <div className="RedArea">
          <RedPicComponent />
        </div>
        <div className="MainArea">
          <MainBox />
        </div>
      </div>
    </div>
  );
}
