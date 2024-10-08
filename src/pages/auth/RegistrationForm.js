import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import imageSrc from '../..//assets/registration-photo.jpeg';

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";

const Registration = () => {

  useRedirect("loggedIn");

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const [error, setError] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("https://kinnect-api-cf0f665319fa.herokuapp.com/dj-rest-auth/registration/", signUpData);
      history.push("/signin");  // Redirect to signin after successful registration
    } catch (err) {
      console.error("Error response:", err.response?.data);
      setError(err.response?.data);  // Set error to display messages on the form
    }
  };
  

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" value={username} onChange={handleChange} />
            </Form.Group>
            {error.username?.map((message, idx) =>
            <Alert variant="warning" key={idx}> {message} </Alert>)}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1" value={password1} onChange={handleChange} />
            </Form.Group>
            {error.password1?.map((message, idx) =>
            <Alert variant="warning" key={idx}> {message} </Alert>)}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={handleChange} />
            </Form.Group>
            {error.password2?.map((message, idx) =>
            <Alert variant="warning" key={idx}> {message} </Alert>)}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
              Register
            </Button>
            {error.non_field_errors?.map((message, idx) =>
            <Alert variant="warning" className="mt-3" key={idx}> {message} </Alert>)}

          </Form> 
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={imageSrc}
        />
      </Col>
    </Row>
  );
}

export default Registration