import React from "react";
import "./st.css"
import Back from '../common/back/test';
import { chemistry } from "../../dummydata"



const ChemistryMaterials = () => {
  return (
    <div className="items">
      {chemistry.map((lecture) => (
        <div key={lecture.title}>
          <div className="title">
            <h3>{lecture.title}</h3>
          </div>
          <p>{lecture.content}</p>
        </div>
      ))}
      <Back title = " "/>
    </div>
  );
};

export default ChemistryMaterials;
