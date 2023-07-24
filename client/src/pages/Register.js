import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="mai">
        <div className="contain">
          <div className="login_image"></div>
          <div className="form-container ">
            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              className="register-form"
            >
              <h1 className="text-center text-primary">Register From</h1>
              <Form.Item label="Name" name="name">
                <Input type="text" required className="border border-dark" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" required className="border border-dark" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input
                  type="password"
                  required
                  className="border border-dark"
                />
              </Form.Item>
              <Link to="/login" className="m-2">
                Already user login here
              </Link>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
