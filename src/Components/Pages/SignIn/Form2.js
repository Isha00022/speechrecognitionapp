import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assetsOfPages/styleOfSignUpIn.css";
import img from "../../assets/fallingboyfinal.png";
import {NavLink} from 'react-router-dom';



const Form2 = () => {
  return (
    <>
      <div>
        <section className="container">
          <div className="left">
            <h1>Sign In to</h1>
            <h1>Recharge Direct</h1>
            <div style={{marginTop:60}}>
               <p>if you don't have an account you can <br/><NavLink to="/">Sign up here!</NavLink> </p>
            </div>
          </div>
          <div className="blueblur"> </div>
          <div className="mid">
            <img src={img} style={{ maxWidth: 550,marginTop:60 }} alt="err" />
          </div>
          <div className="right">
              <h3 className="signup">Sign In</h3> 
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{backgroundColor:"#C7CEEB"}} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Control style={{backgroundColor:"#C7CEEB"}} type="password" placeholder="Password" />
              </Form.Group>
              <Button className="col-lg-12" variant="primary" type="submit">
                Sign in
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Form2;
