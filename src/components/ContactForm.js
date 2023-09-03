import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" id="name" required />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" required />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" id="message" rows="4" required />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
