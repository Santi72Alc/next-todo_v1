import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";

import TasksList from "../components/TasksList";
import FormTaskAdd from "../components/FormTaskAdd";
import { useTasksState } from "../hooks/tasksState";

function Home() {
  const { tasks, modifyTask } = useTasksState([]);

  return (
    <>
      <Navbar />

      <Container fluid>
        <Row className="mx-3 mt-5">
          <Col md={4} sm={12} className="mb-5">
            <FormTaskAdd modifyTask={modifyTask} />
          </Col>
          <Col md={8} sm={12}>
            <TasksList tasks={tasks} modifyTask={modifyTask} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
