import React from "react";
import Sidebar from "./Sidebar";
import OrganizeBar from "./OrganizeBar";

function Body(){
  return (
    <div className="row">
      <Sidebar />
      <OrganizeBar style={{left: "16.67%"}} />
      <OrganizeBar style={{left: "58.33%"}}/>
    </div>
  );
}

export default Body;
