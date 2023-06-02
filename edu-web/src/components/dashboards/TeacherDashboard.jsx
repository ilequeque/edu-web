import React from 'react';
import Back from "../common/back/test"
import OnlineCourses from "../allcourses/OnlineCourses"

const TeacherDashboard = () => {
  return (
    <div>
      <Back title='Welcome, Teacher!' />
      <OnlineCourses />
    </div>
  );
};

export default TeacherDashboard;