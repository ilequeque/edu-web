import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';


const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('api/students');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                {student.subjects.map((subject) => (
                  <div key={subject.id}>
                    <span>{subject.name}: </span>
                    <span>{subject.progress}%</span>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDashboard;
