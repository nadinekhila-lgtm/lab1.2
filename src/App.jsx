import React from "react";


const courseTitle = "adv web dev";

function App() {
  
  const studentName = "Nadine";

  
  const student = {
    name: "Nadine",
    age: 20,
    track: "Front-End"
  };

  
  function sayHello() {
    return "Hello!";
  }

  return (
    <div>
      
      <h1>week 2</h1>

      
      <p>Welcome to {courseTitle}, {studentName}!</p>

      
      <label htmlFor="nameInput">Student Name: </label>
      <input id="nameInput" type="text" />

      
      <section>
        <h3>Student Details:</h3>
        <p>Name: {student.name}, Age: {student.age}, Track: {student.track}</p>
      </section>

      
      <p>{sayHello()}</p>
    </div>
  );
}

export default App;


