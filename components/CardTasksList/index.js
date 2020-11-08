import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

// import SearchForm from "../SearchForm";
import LinesTasks from "../LinesTasks";
import { useEffect } from "react";

export default ({ tasks, modifyTask }) => {
  let tasksList = tasks;

  const EmptyTasks = () => {
    return (
      <Alert variant="warning">
        <strong>NO TASKS</strong> in list
      </Alert>
    );
  };

  useEffect(() => {
    tasksList = tasks;
  });

  return (
    <Card>
      <Card.Header as="h4" className="text-center">
        Tasks list
        {/* <SearchForm /> */}
      </Card.Header>
      <Card.Body>
        {/* There are NO tasks to show */}
        {!tasks.length && <EmptyTasks />}

        {/* There are tasks to show */}
        {tasks && <LinesTasks tasks={tasks} handleTask={modifyTask} />}
      </Card.Body>
    </Card>
  );
};
