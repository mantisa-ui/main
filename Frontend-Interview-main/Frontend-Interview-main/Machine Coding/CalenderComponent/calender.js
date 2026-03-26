import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  console.log(month, "month");
  const [changeMonth, setChangeMonth] = useState(month);
  const [changeYear, setChangeYear] = useState(year);
  const date = today.getDate();
  const day = today.getDay();
  const firstDay = new Date(changeYear, changeMonth, 1).getDay();
  const totalDays = new Date(changeYear, changeMonth + 1, 0).getDate();
  const daysArray = [];

  console.log(changeMonth, changeYear, "test");
  const handlePrev = () => {
    console.log("kkkk");
    if (changeMonth === 0) {
      console.log("lll");
      setChangeMonth(11);
      setChangeYear(changeYear - 1);
    } else {
      console.log("hjj");
      setChangeMonth(changeMonth - 1);
    }
  };
  const handleNext = () => {
    if (changeMonth === 11) {
      setChangeMonth(0);
      setChangeYear(changeYear + 1);
    } else {
      setChangeMonth(changeMonth + 1);
    }
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const showMonth = months[month];
  const showWeekday = weekDays[day];
  for (let i = 0; i < firstDay; i++) {
    daysArray.push("");
  }
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  console.log(daysArray);
  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrev}>Prev</button>
          <span>
            {months[changeMonth]} {changeYear}
          </span>
          <button onClick={handleNext}>Next</button>
        </div>

        <div className="calendar-grid">
          {weekDays.map((day, index) => (
            <div key={index} className="cell header">
              {day}
            </div>
          ))}

          {daysArray.map((day, index) => (
            <div
              key={index}
              className={
                day === date && changeMonth === month && changeYear === year
                  ? "cell today"
                  : "cell"
              }
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
