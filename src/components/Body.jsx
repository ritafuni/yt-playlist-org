import React from "react";
import Sidebar from "./Sidebar";
import OrganizeBar from "./OrganizeBar";

function Body(){
  return (
    <div className="row">
      <Sidebar />
      <OrganizeBar />
      <OrganizeBar />
    </div>
  );
}

export default Body;
