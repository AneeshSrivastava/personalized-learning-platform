import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <p>
        Here you can manage your courses, track progress, and explore new
        learning materials.
      </p>

      <div>
        <h2>Your Courses</h2>
        <ul>
          <li>Course 1 - Progress: 70%</li>
          <li>Course 2 - Progress: 45%</li>
          <li>Course 3 - Progress: 90%</li>
        </ul>
      </div>

      <div>
        <h2>Explore New Courses</h2>
        <p>Check out the latest courses personalized for you!</p>
        <ul>
          <li>Advanced TypeScript</li>
          <li>Microservices Architecture</li>
          <li>React and Redux</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
