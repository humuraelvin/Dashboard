import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import user from "../assets/admin.jpg";
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: "HTML CSS",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "Javascript",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "React.js",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "Express.js",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "Node.js",
    duration: "2 Hours",
    icon: <BiBook />,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--detail">
          <img src={user} alt="" />
          <h3 className="username">John Peter</h3>
          <span className="profession">Teacher</span>
        </div>
        <div className="user-courses">
          {courses.map((course) => (
            <div className="course">
              <div className="course--detail">
                <div className="course--cover">{course.icon}</div>
                <div className="course-name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
