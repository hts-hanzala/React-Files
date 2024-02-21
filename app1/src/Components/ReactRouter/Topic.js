import React from "react";
import { Link } from "react-router-dom";

export default function Topic() {
  const topics = [
    { id: 1, name: "React" },
    { id: 2, name: "Next" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Vue" },
  ];
  return (
    <div>
      <h1>Topic Component</h1>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <Link to={`/topic/${topic.id}/${topic.name}`}>{topic.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
