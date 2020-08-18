import React from "react";
import Header from "./Header";
import Body from "./Body";
import playlist from "./playlist.js";

function App(){
  return (
    <div>
      <Header />
      <Body data={playlist} />
    </div>
  );
}

export default App;
