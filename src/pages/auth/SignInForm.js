import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="mx-auto py-2 p-md-2" md={6}>
      <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
              <>
                {/* Sign-up form fields */}
                <Form.Group controlId="username">
                  <Form.Label className="d-none">Username</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password">
                  <Form.Label className="d-none">Password</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

              </>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                type="submit"
              >
                Sign Up
              </Button>
              {errors.non_field_errors?.map((message, idx) => (	
              <Alert key={idx} variant="warning" className="mt-3">	
                {message}	
              </Alert>	
            ))}
          </Form>

          <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Dont have an account? <span>Sign Up</span>
          </Link>
        </Container>
      </Container>
    </Col>
  </Row>
  );
};

export default SignInForm;