import React from "react";
import OrganizeItem from "./OrganizeItem";

function OrganizeBar(props){
  return (
    <div className="col-sm-5 bg-danger text-light organizebar" style={props.style}>
      <b>{props.data.playlistName}</b>
      {props.data.videos.map(video => <OrganizeItem video={video} />)}

    </div>
  );
}

export default OrganizeBar;
