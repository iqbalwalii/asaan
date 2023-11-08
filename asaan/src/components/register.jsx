import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (d) => {
    if (d.confirmPassword !== d.password) {
      setError("password", {
        type: "manual",
        message: "Passwords doesn't match",
      });
    } else {
      registerUser(d).then(() => navigate("/login"));
    }
    console.log(d);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="loginBox">
        <h5 className="text-center"> Register</h5>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Form.Control
            type="text"
            placeholder="username"
            {...register("username")}
            className="mb-3"
          />
          <Form.Control
            type="text"
            placeholder="first name"
            className="mb-3"
            {...register("first_name")}
          />
          <Form.Control
            type="text"
            placeholder="last_name"
            className="mb-3"
            {...register("last_name")}
          />
          <Form.Control
            type="text"
            placeholder="Phone"
            className="mb-3"
            {...register("phone")}
          />
          <Form.Control
            type="text"
            placeholder="Email"
            className="mb-3"
            {...register("email")}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            {...register("password")}
          />
          <Form.Control
            type="password"
            placeholder=" Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
          <div className="d-grid mt-2">
            <Button type="submit">Sign up</Button>
          </div>
        </Form>
        <p>
          already have an account <a href="signup">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
