import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

const WelcomeForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const checkbox = document.querySelector(".checkbox");
  
    checkbox.addEventListener("change", () => {
      setIsLogin((prevIsLogin) => !prevIsLogin);
    });
  
    return () => {
      checkbox.removeEventListener("change", () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
      });
    };
  }, []);

  return (
    <Row className={styles.row}>
      <Col className="mx-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 text-center d-flex flex-column align-items-center`}>
        <h6 className="mb-0 pb-3">
          <span className={isLogin ? styles.highlight : ""}>Log In </span>
          <span className={!isLogin ? styles.highlight : ""}>Sign Up</span>
        </h6>
          <input
            className="checkbox"
            type="checkbox"
            id="reg-log"
            name="reg-log"
          />
          <label htmlFor="reg-log"></label>
          <Form>
            {isLogin ? (
              <>
                {/* Login form fields */}
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                    />
                    <Button
                      variant="link"
                      className="position-absolute top-50 start-0 translate-middle-y"
                    ></Button>
                  </div>
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control type="password" placeholder="Password" />
                    <Button
                      variant="link"
                      className="position-absolute top-50 start-0 translate-middle-y"
                    ></Button>
                  </div>
                </Form.Group>
              </>
            ) : (
              <>
                {/* Sign-up form fields */}
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <div className="position-relative">
                    <Form.Control type="text" placeholder="Username" />
                    <Button
                      variant="link"
                      className="position-absolute top-50 start-0 translate-middle-y"
                    ></Button>
                  </div>
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control type="password" placeholder="Password" />
                    <Button
                      variant="link"
                      className="position-absolute top-50 start-0 translate-middle-y"
                    ></Button>
                  </div>
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <Button
                      variant="link"
                      className="position-absolute top-50 start-0 translate-middle-y"
                    ></Button>
                  </div>
                </Form.Group>
              </>
            )}
            <Button variant="primary" className="mt-4">
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <p className={styles.Link}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span onClick={toggleForm}>
                {isLogin ? "Sign up" : "Sign in"}
              </span>
            </p>
          </Container>
        </Container>
      </Col>
    </Row>
  );
};

export default WelcomeForm;
