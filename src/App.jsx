const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const exercises = [exercises1, exercises2, exercises3];
  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} parts={parts} />
      <Total exercises={exercises} />
    </div>
  );
};

const Header = (props) => {
  return <p>{props.course}</p>;
};

const Content = (props) => {
  return (
    <div>
      <Part exercises={props.exercises[0]} parts={props.parts[0]} />
      <Part exercises={props.exercises[1]} parts={props.parts[1]} />
      <Part exercises={props.exercises[2]} parts={props.parts[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.parts}, {props.exercises}
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
