import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SearchForm from "../SearchForm";
import LineTask from "../LineTask";
import { useEffect } from "react";

const TasksList = ({ tasks, modifyTask }) => {
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
    <div>
      <Card>
        <Card.Header>
          <Row className="justify-content-between align-items-center">
            <Col sm={5}>
              <h2>Tasks list</h2>
            </Col>
            <Col sm={7}>
              <SearchForm />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {!tasks.length && <EmptyTasks />}

          <ul>
            {tasks.map((task) => (
              <LineTask
                as="li"
                key={task.creationDate}
                task={task}
                handleTask={modifyTask}
              />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TasksList;
