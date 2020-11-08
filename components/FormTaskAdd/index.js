import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const FormTaskAdd = ({ modifyTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyTask("PENDIENT", newTask);
    setNewTask("");
  };

  return (
    <Card className="shadow">
      <Card.Header as="h4" className="text-center">
        Actions to add
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Row className="align-items-center justify-content-center">
            <Col className="mr-auto">
              <Form.Control
                type="text"
                value={newTask}
                placeholder="task to add"
                onChange={(e) => setNewTask(e.target.value)}
              />
            </Col>

            <Col className="my-1">
              <Button
                type="submit"
                variant="primary"
                onClick={handleSubmit}
                disabled={!newTask}
              >
                Add task
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormTaskAdd;
