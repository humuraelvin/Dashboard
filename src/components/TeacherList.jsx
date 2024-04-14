import React from "react";
import "../styles/teacherlist.css";
import admin from "../assets/admin.jpg";
const teachers = [
  {
    image: admin,
    name: "Prof. Albert Einstein",
    duration: "20hour lesson",
    cost: "100",
  },
  {
    image: admin,
    name: "Prof. Albert Einstein",
    duration: "20hour lesson",
    cost: "100",
  },
  {
    image: admin,
    name: "Prof. Albert Einstein",
    duration: "20hour lesson",
    cost: "100",
  },
  {
    image: admin,
    name: "Prof. Albert Einstein",
    duration: "20hour lesson",
    cost: "100",
  },
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="kinyarwanda">Kinyarwanda</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher) => (
          <div className="list">
            <div className="teacher--detail">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>${teacher.cost}/hr.</span>
            <span className="teacher--todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
