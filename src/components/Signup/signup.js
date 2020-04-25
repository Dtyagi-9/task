import React, { Component, createRef } from "react";
import { Button, Form, Grid, Header} from "semantic-ui-react";
import "./signup.scss";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Password from "../Login/password";
import Logo from "../common/Logo";

class SelectField extends Component {
  constructor() {
    super();
    this.emailLabel = createRef(null);
    this.passwordLabel = createRef(null);
    this.setPasswordLabel = createRef(null);
    this.state = { signUpEmail: "" };
  }

  componentDidMount() {
    this.setState({ signUpEmail: this.props.email });
  }

  handleChange = e => {
    this.setState({ signUpEmail: e.target.value });
  };

  handleBack = () => {
    this.props.history.goBack();
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

  handleSetPasswordFocus = e =>
    (this.setPasswordLabel.current.innerText = "Confirm your Password");

  handleSetPasswordBlur = e => (this.setPasswordLabel.current.innerText = "");

  render() {
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
                  ENTER YOUR DETAILS
                </Header>
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    variant="outlined"
                    onFocus={this.handleEmailFocus}
                    onBlur={this.handleEmailBlur}
                    fullWidth
                    placeholder="farmer@gmail.com"
                  />
                  <p ref={this.emailLabel} className="label"></p>
                  <div className="password">
                    <Password
                      onBlur={this.handlePasswordBlur}
                      onFocus={this.handlePasswordFocus}
                    />
                    <p ref={this.passwordLabel} className="label"></p>
                    <Password
                      onBlur={this.handleSetPasswordBlur}
                      onFocus={this.handleSetPasswordFocus}
                      name={"Confirm Password"}
                    />
                  </div>
                  <p ref={this.setPasswordLabel} className="label"></p>

                  <Form.Input
                    fluid
                    placeholder="Phone number"
                    className="contact"
                  />

                  {/* <div className="contact">
                <Form.Input
                  fluid
                  placeholder="Phone number"
                  name="contact"
                  fullWidth
                />
              </div> */}
                  <div className="submit-div flex end">
                    <Button
                      fluid
                      size="large"
                      className="white"
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button color="green" fluid size="large">
                      NEXT
                    </Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
          <div className="imagesection">{/* <p></p> */}</div>
        </div>
      </>
    );
  }
}

export default withRouter(SelectField);
