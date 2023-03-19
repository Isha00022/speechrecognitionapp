import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assetsOfPages/styleOfSignUpIn.css";
import img from "../../assets/fallingboyfinal.png";
import { NavLink } from "react-router-dom";


const Formreal = () => {
  return (
    <>
      <div>
        <section className="container">
          <div className="left">
            <h1>Sign Up to</h1>
            <h1>Recharge Direct</h1>
            <div style={{marginTop:60}}>
               <p>if you already have an account you can <br/><NavLink to="/login">Sign in here!</NavLink></p>
            </div>
          </div>
          <div className="blueblur"> </div>
          <div className="mid">
            <img src={img} style={{ maxWidth: 550,marginTop:60 }} alt="err" />
          </div>
          <div className="right">
              <h3 className="signup">Sign Up</h3> 
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{backgroundColor:"#C7CEEB"}} type="name" placeholder="Name" />
              </Form.Group>

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
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Formreal;
