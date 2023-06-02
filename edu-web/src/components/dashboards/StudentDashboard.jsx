import React from 'react';
import Back from "../common/back/Back"
import CoursesCard from "../allcourses/CoursesCard"
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