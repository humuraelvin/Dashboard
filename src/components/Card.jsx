import React from "react";
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from "react-icons/bi";

const courses = [
  {
    title: "Webdevelopment",
    duration:"4 Hours",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App Development",
    duration: "2 Hours",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UX & UI",
    duration: "2 Hours",
    icon: <BiBuilding />,
  },
];

const Card = () => {
  return <div className="card--container">
    {courses.map((item) => (
        <div className="card">
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
                <h2>{item.title}</h2>
                <br />
                <h2>{item.duration}</h2>
            </div>
        </div>
    ))}
    </div>;
};

export default Card;
