import React from "react";
import "./styles.scss";
import info from "../data";
import President from "./President";


function Presidents() {
  return (
    <div>
      {info.map((president) =>
     <President key={president.id} name={president.name} description={president.description} image={president.image}/>
      )}
    </div>
  );
}

export default Presidents;