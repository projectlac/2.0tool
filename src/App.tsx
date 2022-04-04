import React, { createContext, useState } from 'react';

import './assets/global.scss';
import Home from './components/Home/Home';
import { ChooseOnmy } from './models/item';
export const OnmyContext = createContext<any | null>(null);
function App() {
  const [onmyChoose, setOnmyChoose] = useState<ChooseOnmy>({
    blue: -1,
    red: -1
  });
  const chooseBlueOnmy = (id: number) => {
    setOnmyChoose({ ...onmyChoose, blue: id });
  };
  const chooseRedOnmy = (id: number) => {
    setOnmyChoose({ ...onmyChoose, red: id });
  };
  const value = {
    onmyChoose,
    chooseBlueOnmy,
    chooseRedOnmy
  };
  return (
    <OnmyContext.Provider value={value}>
      <div className="App">
        <Home />
      </div>
    </OnmyContext.Provider>
  );
}

export default App;
