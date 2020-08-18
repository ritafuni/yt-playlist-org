import React from "react";
import Sidebar from "./Sidebar";
import OrganizeBar from "./OrganizeBar";

function Body(props){
  //Divide data for Sidebar/Organizebar
  let playlistArray = props.data.map(playlist => playlist.playlistName);

  //temporary selected playlist index number
  let tempIdx1 = 0;
  let tempIdx2 = 1;
  let chosenPlaylists = props.data.filter((playlist, index) => index === tempIdx1 || index === tempIdx2);
  console.log(chosenPlaylists);

  return (
    <div className="row">
      <Sidebar
        data={playlistArray}
      />
      {chosenPlaylists.map((playlist, index) => {
        return (
          <OrganizeBar
            key={index}
            style={{left: index === 0 ? "16.67%" : "58.33%"}}
            data={playlist}
          />
        )
      })}
    </div>
  );
}

export default Body;
