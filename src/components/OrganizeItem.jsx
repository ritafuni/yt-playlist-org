import React from "react";

function OrganizeItem(props){
  let draggedItem;
  function itemDrag(event){
    draggedItem = event.target;
    console.log("draggedItem:" + draggedItem);
  }

  return (
    <div className="row organize-item">
      <div className="col-sm-4">
        <img className="thumbnail" src={props.video.thumbnail}></img>
      </div>
      <div className="col-sm-8 organize-text">
        <p>{props.video.title}</p>
        <p>{props.video.uploader}</p>
      </div>
    </div>
  );
}

export default OrganizeItem;
