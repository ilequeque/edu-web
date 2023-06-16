import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import OnlineCourses from '../allcourses/OnlineCourses';


const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auths/users/52');
        setCourses(response.data);
      } catch (error) {
        console.log(error);   
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Courses</th>
            <th>Progress</th>
            <th>Mock Test</th>
          </tr>
        </thead>
        <tbody>
            <OnlineCourses />
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.progress}%</td>
              <td>
                <a href={`/mock-test/${course.id}`}>Start Test</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
