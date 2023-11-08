import { Button, Form } from "react-bootstrap";
import { loginUser } from "../services/user";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";

const Login = () => {
  React.useEffect(() => {
    if (localStorage.getItem("user") != null) {
      navigate("/");
    }
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (d) => {
    loginUser(d)
      .then((res) => {
        if (res.user) {
          localStorage.setItem("user", JSON.stringify(res.user));
          navigate("/");
        }
      })
      .catch(() => {
        setError("password", {
          type: "manual",
          message: "username and Password doesn't match",
        });
      });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="loginBox">
        <h5 className="text-center"> Login</h5>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Form.Control
            type="text"
            placeholder="username"
            className="mb-3"
            {...register("username")}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <div className="d-grid mt-2">
            <Button type="submit">Login</Button>
          </div>
        </Form>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <p>
          Don&apos;t have an account <a href="signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
