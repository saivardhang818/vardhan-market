import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "./store";

function Signing() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    navigate("/");
  };

  return (
    <>
      <style>{`
        .signin-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f3f1f0;
        }

        .signin-box {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          font-family: "Segoe UI", sans-serif;
        }

        .signin-box h2 {
          text-align: center;
          color: #4f7893;
          margin-bottom: 20px;
        }

        .signin-box input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #a5b899;
          border-radius: 8px;
          font-size: 1rem;
        }

        .signin-box button {
          width: 100%;
          padding: 12px;
          background: #4f7893;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .signin-box button:hover {
          background: #54a6b7;
        }

        .signin-box p {
          text-align: center;
          margin-top: 16px;
          font-size: 0.95rem;
        }

        .signin-box a {
          color: #4f7893;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>

      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            New User? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signing;
