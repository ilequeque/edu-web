import React from 'react';

const SubjectComponent = ({ subject }) => {
  return (
    <div>
      <h2>{subject.name}</h2>
      <h3>Materials:</h3>
      {subject.materials.map((material) => (
        <div key={material.id}>
          <h4>{material.title}</h4>
          <p>{material.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectComponent;
