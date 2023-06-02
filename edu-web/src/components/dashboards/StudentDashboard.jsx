import React from 'react';
import Back from "../common/back/test"
import OnlineCourses from "../allcourses/OnlineCourses"

const StudentDashboard = () => {
  return (
    <div>
      <Back title='Welcome, Student!' />
      <OnlineCourses />
    </div>
  );
};

export default StudentDashboard;