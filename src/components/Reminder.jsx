import React, { useState } from "react";
import "./Reminder.css";

export default function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setNewReminder(e.target.value);
  };

  const handleAdd = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      setNewReminder("");
    }
  };
  const handleDelete = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="container">
      <h2>REMINDER APP</h2>
      <div className="input-container">
        <input
          type="text"
          value={newReminder}
          onChange={handleInputChange}
          placeholder="enter the reminder"
        />
        <button onClick={handleAdd} className="add-btn">
          ADD REMINDER
        </button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder-list">
          {reminder.map((rem, index) => (
            <li key={index}>
              {rem}
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p> no reminders</p>
      )}
    </div>
  );
}
