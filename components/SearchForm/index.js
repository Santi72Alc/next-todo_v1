import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const SearchForm = () => {
  return (
    <Form inline>
      <FormControl
        size="sm"
        type="text"
        placeholder="Search"
        className=" mr-sm-2"
      />

      <Button size="sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
