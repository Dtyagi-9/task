import React, { Component, createRef } from "react";
import { Button, Form, Grid, Header, Checkbox, Icon } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import "./login.scss";
import { Link, withRouter } from "react-router-dom";
import Password from "./password";
import Logo from "../common/Logo";
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      signupEmail: "",
      showPassword: false,
      password: ""
    };
    this.emailLabel = createRef(null);
    this.passwordLabel = createRef(null);
    this.signupEmail = createRef(null);
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignup = () => {
    this.props.updateEmail(this.state.signupEmail);
    this.props.history.push("/signup");
  };

  handleEmailFocus = e =>
    (this.emailLabel.current.innerText = "Enter your Email address");

  handleEmailBlur = e => (this.emailLabel.current.innerText = "");

  handlePasswordFocus = e =>
    (this.passwordLabel.current.innerText = "Enter your Password");

  handleShowPassword = e => {
    console.log(e.target);
  };

  handlePasswordBlur = e => (this.passwordLabel.current.innerText = "");

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container-second">
          <div className="formcontainer-second">
            <Logo />
            <Grid
              textAlign="center"
              style={{ marginTop: "6rem" }}
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column style={{ maxWidth: 350 }}>
                <Header as="h3" color="grey" textAlign="left">
                  LOGIN TO ACCOUNT
                </Header>
                <Form size="large">
                  <div className="input-text">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Email"
                      variant="outlined"
                      onFocus={this.handleEmailFocus}
                      onBlur={this.handleEmailBlur}
                      fullWidth
                      placeholder="farmer@gmail.com"
                    />
                  </div>
                  <p ref={this.emailLabel} className="label"></p>
                  <div className="password">
                    <Password 
                      onBlur={this.handlePasswordBlur}
                      onFocus={this.handlePasswordFocus}
                    />
                  </div>
                  <p ref={this.passwordLabel} className="label"></p>
                  <div className="submit-div flex end">
                    <span>Forgot Password?</span>
                    <Button color="green" fluid size="large">
                      LOGIN
                    </Button>
                  </div>
                </Form>
                <div className="m5">
                  <Header as="h3" color="grey" textAlign="left">
                    LET'S GET STARTED
                  </Header>
                  <div className="signup-div">
                    <Form size="large">
                      <Form.Input
                        fluid
                        placeholder="Enter Your Email ID"
                        type="email"
                        value={this.state.signupEmail}
                        onChange={this.handleChange}
                        name="signupEmail"
                      />
                      <div className="checkbox-div">
                        <Checkbox
                          label={
                            <label className="label-font">
                              I agree with processing of my personal data in
                              conformity with the Privacy Policy. When clicking
                              on "Get Started", you also agree with the End User
                              License Agreement.
                            </label>
                          }
                        />
                      </div>
                      <div className="flex end">
                        <Button fluid size="large" onClick={this.handleSignup}>
                          SIGN UP
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div className="imagesection">{/* <p></p> */}</div>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
