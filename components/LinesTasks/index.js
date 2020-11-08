import { VscClose, VscCheck, VscCircleSlash } from "react-icons/vsc";

import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { getColorByState, getStateText } from "../../config";

export default ({ tasks, handleTask }) => {
  return (
    <u>
      {tasks.map((task) => (
        <TaskToShow
          as="li"
          key={task.creationDate}
          task={task}
          handleTask={handleTask}
        />
      ))}
    </u>
  );
};

const TaskToShow = ({ task, handleTask }) => {
  const { creationDate, text, state } = task;
  const colorAlert = getColorByState(state);

  // handleTask function
  const handleTaskOption = (e) => {
    const optSelected = e.target.id || e.target.parentElement.id;

    e.preventDefault();
    handleTask(optSelected, creationDate);
  };

  // date format return
  const dateFormat = (dateId) => {
    const date = new Date(dateId).toLocaleString();
    return date;
  };

  return (
    <Alert variant={colorAlert}>
      <Alert.Heading>
        <Badge pill variant="dark">
          Created at {dateFormat(creationDate)}
        </Badge>
        {state !== "PENDIENT" ? " * " + getStateText(state).toUpperCase() : ""}
      </Alert.Heading>
      <Row className="align-items-center">
        <Col>{text}</Col>
        <Col sm={3} md={3} lg={3}>
          <ButtonGroup
            className="float-right "
            aria-label="First group"
            onClick={handleTaskOption}
          >
            <Button
              size="sm"
              id="DONE"
              variant={getColorByState("DONE")}
              hidden={state !== "PENDIENT"}
            >
              <VscCheck />
            </Button>

            <Button
              size="sm"
              id="CANCEL"
              hidden={state === "DONE"}
              variant={getColorByState("CANCEL")}
            >
              <VscCircleSlash />
            </Button>

            <Button size="sm" id="DELETE" variant={getColorByState("DELETE")}>
              <VscClose />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Alert>
  );
};
