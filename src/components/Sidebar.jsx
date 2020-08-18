import React from "react";

function Sidebar(props){
  return (
    <nav className="col-sm-2 bg-light sidebar">
      <div className="sidebar-sticky">
        <div>
          <b>Playlist List</b>
        </div>
        <div>
          {props.data.map(playlistElem => <p>{playlistElem}</p>)}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
