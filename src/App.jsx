const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  let parts = [course.parts[0], course.parts[1], course.parts[2]];
  let exercises = [parts[0].exercises, parts[1].exercises, parts[2].exercises];

  return (
    <div>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name}, {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{": "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

export default App;
